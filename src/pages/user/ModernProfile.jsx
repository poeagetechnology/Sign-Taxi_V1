import React, { useState, useRef } from 'react'
import { Camera, Save, LogOut, Wallet, Heart, Settings, Bell, Shield } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Avatar from '../../components/common/Avatar'
import Button from '../../components/common/Button'
import Input from '../../components/common/Input'
import useAuthStore from '../../store/authStore'
import { updateUserProfile, uploadUserPhoto } from '../../services/userService'

const ModernUserProfile = () => {
  const { userData, refreshUserData, logout } = useAuthStore()
  const fileRef = useRef(null)
  const [form, setForm] = useState({
    name: userData?.name || '',
    phone: userData?.phone || '',
    email: userData?.email || '',
  })
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const handleFieldChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSave = async () => {
    if (!form.name.trim()) {
      toast.error('Name is required')
      return
    }
    setSaving(true)
    try {
      await updateUserProfile(userData.id, { name: form.name, phone: form.phone })
      await refreshUserData()
      toast.success('Profile updated successfully!')
    } catch {
      toast.error('Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be under 5MB')
      return
    }
    setUploading(true)
    try {
      await uploadUserPhoto(userData.id, file)
      await refreshUserData()
      toast.success('Photo updated!')
    } catch {
      toast.error('Failed to upload photo')
    } finally {
      setUploading(false)
    }
  }

  const handleLogout = async () => {
    if (!window.confirm('Are you sure you want to logout?')) return
    try {
      await logout()
      toast.success('Logged out successfully')
    } catch {
      toast.error('Failed to logout')
    }
  }

  return (
    <AppLayout title="Profile">
      <div className="max-w-2xl space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">My Account</h1>
          <p className="text-slate-500 text-sm mt-0.5">View and manage your profile information</p>
        </div>

        {/* Profile Photo Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar user={userData} size="lg" className="w-20 h-20" />
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
                disabled={uploading}
              />
              <button
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50"
              >
                <Camera size={16} className="text-blue-600" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="font-display text-xl font-bold text-slate-900">{userData?.name}</h2>
              <p className="text-slate-600 text-sm mt-1">👤 {userData?.role ? userData.role.charAt(0).toUpperCase() + userData.role.slice(1) : 'User'}</p>
              <p className="text-slate-600 text-sm mt-0.5">📧 {userData?.email || 'No email'}</p>
              <p className="text-sm text-blue-600 font-semibold mt-3">
                {uploading ? 'Uploading photo...' : 'Click camera to change photo'}
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-slate-900 flex items-center gap-2">
            <Settings size={18} />
            Personal Information
          </h3>
          <div className="bg-white rounded-2xl p-5 border-2 border-slate-200 space-y-4">
            <Input
              label="Full Name"
              value={form.name}
              onChange={handleFieldChange('name')}
              placeholder="Enter your full name"
            />
            <Input
              label="Phone Number"
              value={form.phone}
              onChange={handleFieldChange('phone')}
              placeholder="Enter your phone number"
              type="tel"
            />
            <Input
              label="Email Address"
              value={form.email}
              readOnly
              placeholder="Email cannot be changed"
              disabled
            />
            <Button
              fullWidth
              onClick={handleSave}
              loading={saving}
              className="mt-2"
            >
              <Save size={16} /> Save Changes
            </Button>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Wallet */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-4 border-2 border-emerald-200 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Wallet size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-emerald-900">Wallet</p>
                <p className="text-xs text-emerald-700 mt-1">View balance & add money</p>
              </div>
            </div>
          </div>

          {/* Favorites */}
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-4 border-2 border-pink-200 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                <Heart size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-pink-900">Favorites</p>
                <p className="text-xs text-pink-700 mt-1">Saved locations & drivers</p>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border-2 border-blue-200 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Bell size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-blue-900">Notifications</p>
                <p className="text-xs text-blue-700 mt-1">Manage notification preferences</p>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border-2 border-purple-200 cursor-pointer hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                <Shield size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-purple-900">Security</p>
                <p className="text-xs text-purple-700 mt-1">Change password & privacy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div>
          <Button
            fullWidth
            variant="danger"
            onClick={handleLogout}
            className="text-base"
          >
            <LogOut size={18} /> Logout
          </Button>
          <p className="text-xs text-slate-400 text-center mt-3">Version 2.0 • Modern UI</p>
        </div>
      </div>
    </AppLayout>
  )
}

export default ModernUserProfile
