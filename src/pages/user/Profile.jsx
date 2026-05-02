import React, { useState, useRef } from 'react'
import { Camera, Save } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Avatar from '../../components/common/Avatar'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import useAuthStore from '../../store/authStore'
import { updateUserProfile, uploadUserPhoto } from '../../services/userService'

const UserProfile = () => {
  const { userData, refreshUserData } = useAuthStore()
  const fileRef = useRef(null)
  const [form, setForm] = useState({ name: userData?.name || '', phone: userData?.phone || '' })
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const set = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }))

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error('Name is required'); return }
    setSaving(true)
    try {
      await updateUserProfile(userData.id, { name: form.name, phone: form.phone })
      await refreshUserData()
      toast.success('Profile updated!')
    } catch { toast.error('Failed to update') }
    finally { setSaving(false) }
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) { toast.error('Image must be under 5MB'); return }
    setUploading(true)
    try {
      await uploadUserPhoto(userData.id, file)
      await refreshUserData()
      toast.success('Photo updated!')
    } catch { toast.error('Failed to upload photo') }
    finally { setUploading(false) }
  }

  return (
    <AppLayout title="Profile">
      <div className="max-w-lg space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Your Profile</h1>
          <p className="text-slate-500 text-sm mt-0.5">Manage your account details</p>
        </div>

        {/* Photo */}
        <div className="card flex items-center gap-5">
          <div className="relative">
            <Avatar name={userData?.name} photoURL={userData?.photoURL} size="2xl" />
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-0 right-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center shadow-md hover:bg-amber-600 transition-colors"
            >
              {uploading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Camera size={14} className="text-white" />
              )}
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{userData?.name}</p>
            <p className="text-sm text-slate-500">{userData?.email}</p>
            <span className="badge-gray mt-1.5">Passenger</span>
          </div>
        </div>

        {/* Form */}
        <div className="card space-y-4">
          <h2 className="font-display font-semibold text-slate-900">Personal Information</h2>
          <Input label="Full Name" value={form.name} onChange={set('name')} placeholder="Your name" />
          <Input label="Phone Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 555 000 0000" />
          <Input label="Email Address" value={userData?.email || ''} disabled hint="Email cannot be changed" />
          <Button onClick={handleSave} loading={saving} fullWidth>
            <Save size={16} /> Save Changes
          </Button>
        </div>

        {/* Account info */}
        <div className="card bg-slate-50 border border-slate-100">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Account</p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Role</span>
              <span className="font-medium capitalize">{userData?.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Status</span>
              <span className={`font-medium ${userData?.status === 'active' ? 'text-emerald-600' : 'text-red-500'}`}>
                {userData?.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default UserProfile
