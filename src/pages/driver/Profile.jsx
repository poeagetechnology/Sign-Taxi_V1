import React, { useEffect, useState, useRef } from 'react'
import { Camera, Save, Upload, CheckCircle, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Avatar from '../../components/common/Avatar'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import Badge from '../../components/common/Badge'
import Spinner from '../../components/common/Spinner'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { getDriverById, updateDriverProfile, uploadDriverDocument } from '../../services/driverService'
import { updateUserProfile, uploadUserPhoto } from '../../services/userService'

const DriverProfile = () => {
  const { userData, refreshUserData } = useAuthStore()
  const { driverProfile, setDriverProfile } = useDriverStore()
  const photoRef = useRef(null)
  const licenseRef = useRef(null)
  const idRef = useRef(null)

  const [loading, setLoading] = useState(!driverProfile)
  const [saving, setSaving] = useState(false)
  const [uploadingPhoto, setUploadingPhoto] = useState(false)
  const [uploadingDoc, setUploadingDoc] = useState(null)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehiclePlate: '',
  })

  useEffect(() => {
    if (!userData?.id) return
    if (driverProfile) {
      populateForm(driverProfile)
      setLoading(false)
    } else {
      getDriverById(userData.id)
        .then(d => {
          if (d) { setDriverProfile(d); populateForm(d) }
        })
        .finally(() => setLoading(false))
    }
  }, [userData?.id])

  const populateForm = (d) => {
    setForm({
      name: d.name || '',
      phone: d.phone || '',
      vehicleMake: d.vehicleDetails?.make || '',
      vehicleModel: d.vehicleDetails?.model || '',
      vehiclePlate: d.vehicleDetails?.plate || '',
    })
  }

  const set = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error('Name is required'); return }
    setSaving(true)
    try {
      const updates = {
        name: form.name,
        phone: form.phone,
        vehicleDetails: {
          make: form.vehicleMake,
          model: form.vehicleModel,
          plate: form.vehiclePlate,
        },
      }
      await updateDriverProfile(userData.id, updates)
      await updateUserProfile(userData.id, { name: form.name, phone: form.phone })
      const refreshed = await getDriverById(userData.id)
      if (refreshed) setDriverProfile(refreshed)
      await refreshUserData()
      toast.success('Profile updated!')
    } catch {
      toast.error('Failed to save profile')
    } finally {
      setSaving(false)
    }
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return }
    setUploadingPhoto(true)
    try {
      await uploadUserPhoto(userData.id, file)
      await refreshUserData()
      toast.success('Photo updated!')
    } catch {
      toast.error('Failed to upload photo')
    } finally {
      setUploadingPhoto(false)
    }
  }

  const handleDocUpload = async (e, docType) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) { toast.error('File must be under 10MB'); return }
    setUploadingDoc(docType)
    try {
      const url = await uploadDriverDocument(userData.id, file, docType)
      const refreshed = await getDriverById(userData.id)
      if (refreshed) setDriverProfile(refreshed)
      toast.success(`${docType === 'license' ? 'License' : 'ID'} uploaded!`)
    } catch {
      toast.error('Failed to upload document')
    } finally {
      setUploadingDoc(null)
    }
  }

  if (loading) return (
    <AppLayout title="Profile">
      <div className="flex items-center justify-center h-64"><Spinner size="lg" /></div>
    </AppLayout>
  )

  return (
    <AppLayout title="Profile">
      <div className="max-w-lg space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Driver Profile</h1>
          <p className="text-slate-500 text-sm mt-0.5">Manage your driver account</p>
        </div>

        {/* Approval status */}
        <div className={`flex items-start gap-3 rounded-2xl p-4 ${driverProfile?.isApproved ? 'bg-emerald-50 border border-emerald-100' : 'bg-amber-50 border border-amber-100'}`}>
          {driverProfile?.isApproved
            ? <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
            : <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          }
          <div>
            <p className={`font-semibold text-sm ${driverProfile?.isApproved ? 'text-emerald-800' : 'text-amber-800'}`}>
              {driverProfile?.isApproved ? 'Account Approved' : 'Pending Admin Approval'}
            </p>
            <p className={`text-xs mt-0.5 ${driverProfile?.isApproved ? 'text-emerald-600' : 'text-amber-600'}`}>
              {driverProfile?.isApproved
                ? 'You can go online and accept ride requests.'
                : 'Upload your documents below to speed up approval.'}
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="card flex items-center gap-5">
          <div className="relative">
            <Avatar name={userData?.name} photoURL={userData?.photoURL} size="2xl" />
            <button
              onClick={() => photoRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:bg-amber-600 transition-colors"
            >
              {uploadingPhoto
                ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                : <Camera size={14} className="text-white" />
              }
            </button>
            <input ref={photoRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{userData?.name}</p>
            <p className="text-sm text-slate-500">{userData?.email}</p>
            <div className="flex items-center gap-2 mt-1.5">
              <Badge variant={driverProfile?.isApproved ? 'success' : 'warning'}>
                {driverProfile?.isApproved ? 'Approved' : 'Pending'}
              </Badge>
              <Badge variant={driverProfile?.isOnline ? 'success' : 'gray'}>
                {driverProfile?.isOnline ? '● Online' : '○ Offline'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Personal info */}
        <div className="card space-y-4">
          <h2 className="font-display font-semibold text-slate-900">Personal Information</h2>
          <Input label="Full Name" value={form.name} onChange={set('name')} placeholder="Your name" />
          <Input label="Phone Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 555 000 0000" />
          <Input label="Email Address" value={userData?.email || ''} disabled hint="Email cannot be changed" />
        </div>

        {/* Vehicle info */}
        <div className="card space-y-4">
          <h2 className="font-display font-semibold text-slate-900">Vehicle Details</h2>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Make" placeholder="Toyota" value={form.vehicleMake} onChange={set('vehicleMake')} />
            <Input label="Model" placeholder="Camry" value={form.vehicleModel} onChange={set('vehicleModel')} />
          </div>
          <Input label="License Plate" placeholder="ABC-1234" value={form.vehiclePlate} onChange={set('vehiclePlate')} />
          <Button onClick={handleSave} loading={saving} fullWidth>
            <Save size={16} /> Save Changes
          </Button>
        </div>

        {/* Documents */}
        <div className="card space-y-4">
          <div>
            <h2 className="font-display font-semibold text-slate-900">Documents</h2>
            <p className="text-xs text-slate-400 mt-0.5">Upload required documents for account approval</p>
          </div>

          {/* License */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-700">Driving License</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {driverProfile?.documents?.licenseURL ? '✅ Uploaded' : 'Not uploaded'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {driverProfile?.documents?.licenseURL && (
                <a
                  href={driverProfile.documents.licenseURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-600 hover:underline"
                >
                  View
                </a>
              )}
              <Button
                size="sm"
                variant="secondary"
                loading={uploadingDoc === 'license'}
                onClick={() => licenseRef.current?.click()}
              >
                <Upload size={13} />
                {driverProfile?.documents?.licenseURL ? 'Replace' : 'Upload'}
              </Button>
              <input
                ref={licenseRef}
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => handleDocUpload(e, 'license')}
              />
            </div>
          </div>

          {/* National ID */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-700">National ID</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {driverProfile?.documents?.idURL ? '✅ Uploaded' : 'Not uploaded'}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {driverProfile?.documents?.idURL && (
                <a
                  href={driverProfile.documents.idURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-amber-600 hover:underline"
                >
                  View
                </a>
              )}
              <Button
                size="sm"
                variant="secondary"
                loading={uploadingDoc === 'id'}
                onClick={() => idRef.current?.click()}
              >
                <Upload size={13} />
                {driverProfile?.documents?.idURL ? 'Replace' : 'Upload'}
              </Button>
              <input
                ref={idRef}
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => handleDocUpload(e, 'id')}
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DriverProfile
