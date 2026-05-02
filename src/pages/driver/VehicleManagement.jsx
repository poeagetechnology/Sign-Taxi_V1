import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Car, Plus, Trash2, CheckCircle, AlertCircle, Edit2, Upload } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Button from '../../components/common/Button'
import Modal from '../../components/common/Modal'
import Spinner from '../../components/common/Spinner'
import useAuthStore from '../../store/authStore'
import useDriverStore from '../../store/driverStore'
import { getDriverById, updateDriverProfile } from '../../services/driverService'
import { VEHICLE_TYPES, VEHICLE_INFO } from '../../constants/ridingOptions'

const VehicleManagement = () => {
  const navigate = useNavigate()
  const { userData } = useAuthStore()
  const { driverProfile, setDriverProfile } = useDriverStore()
  const [vehicles, setVehicles] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingVehicle, setEditingVehicle] = useState(null)
  const [formData, setFormData] = useState({
    type: 'mini',
    model: '',
    licensePlate: '',
    color: '',
    year: new Date().getFullYear(),
    mileage: 0,
    isActive: false,
  })

  useEffect(() => {
    if (!userData?.id) return
    getDriverById(userData.id)
      .then(driver => {
        if (driver) {
          setDriverProfile(driver)
          setVehicles(driver.vehicles || [])
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [userData?.id, setDriverProfile])

  const handleAddVehicle = async () => {
    if (!formData.model || !formData.licensePlate) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)
    try {
      const newVehicles = [...vehicles, { id: Date.now(), ...formData }]
      await updateDriverProfile(userData.id, { vehicles: newVehicles })
      setVehicles(newVehicles)
      setShowAddModal(false)
      setFormData({
        type: 'mini',
        model: '',
        licensePlate: '',
        color: '',
        year: new Date().getFullYear(),
        mileage: 0,
        isActive: false,
      })
      toast.success('Vehicle added successfully!')
    } catch (err) {
      toast.error(err.message || 'Failed to add vehicle')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateVehicle = async () => {
    setLoading(true)
    try {
      const updatedVehicles = vehicles.map(v => 
        v.id === editingVehicle.id ? editingVehicle : v
      )
      await updateDriverProfile(userData.id, { vehicles: updatedVehicles })
      setVehicles(updatedVehicles)
      setShowEditModal(false)
      setEditingVehicle(null)
      toast.success('Vehicle updated successfully!')
    } catch (err) {
      toast.error(err.message || 'Failed to update vehicle')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteVehicle = async (vehicleId) => {
    if (!confirm('Delete this vehicle?')) return
    
    setLoading(true)
    try {
      const updatedVehicles = vehicles.filter(v => v.id !== vehicleId)
      await updateDriverProfile(userData.id, { vehicles: updatedVehicles })
      setVehicles(updatedVehicles)
      toast.success('Vehicle deleted')
    } catch (err) {
      toast.error(err.message || 'Failed to delete vehicle')
    } finally {
      setLoading(false)
    }
  }

  const handleSetActive = async (vehicleId) => {
    setLoading(true)
    try {
      const updatedVehicles = vehicles.map(v => ({
        ...v,
        isActive: v.id === vehicleId
      }))
      await updateDriverProfile(userData.id, { vehicles: updatedVehicles })
      setVehicles(updatedVehicles)
      toast.success('Active vehicle updated')
    } catch (err) {
      toast.error(err.message || 'Failed to set active vehicle')
    } finally {
      setLoading(false)
    }
  }

  if (loading && vehicles.length === 0) {
    return (
      <AppLayout title="Vehicles">
        <div className="flex items-center justify-center h-96">
          <Spinner size="lg" />
        </div>
      </AppLayout>
    )
  }

  const activeVehicle = vehicles.find(v => v.isActive)

  return (
    <AppLayout title="My Vehicles">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">My Vehicles</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your vehicles and set which one you're using</p>
          </div>
          <Button
            onClick={() => {
              setFormData({
                type: 'mini',
                model: '',
                licensePlate: '',
                color: '',
                year: new Date().getFullYear(),
                mileage: 0,
                isActive: false,
              })
              setShowAddModal(true)
            }}
            className="gap-2"
          >
            <Plus size={18} /> Add Vehicle
          </Button>
        </div>

        {vehicles.length === 0 ? (
          <div className="bg-slate-100 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Car size={32} className="text-slate-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">No vehicles yet</h3>
            <p className="text-slate-600 mb-6">Add your first vehicle to start accepting rides</p>
            <Button onClick={() => setShowAddModal(true)}>Add Vehicle</Button>
          </div>
        ) : (
          <div className="space-y-3">
            {vehicles.map(vehicle => {
              const vehicleInfo = VEHICLE_INFO[vehicle.type]
              return (
                <div
                  key={vehicle.id}
                  className={`rounded-2xl p-5 border-2 transition-all ${
                    vehicle.isActive
                      ? 'bg-emerald-50 border-emerald-300 shadow-lg'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Vehicle Icon */}
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl ${
                        vehicle.isActive
                          ? 'bg-emerald-200'
                          : 'bg-slate-100'
                      }`}>
                        {vehicleInfo?.icon || '🚗'}
                      </div>

                      {/* Vehicle Details */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-slate-900">{vehicle.model}</h3>
                          <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-700 rounded-lg capitalize">
                            {vehicle.type}
                          </span>
                          {vehicle.isActive && (
                            <span className="text-xs font-semibold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-lg flex items-center gap-1">
                              <CheckCircle size={12} /> Active
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-slate-600 space-y-0.5">
                          <p>📋 Plate: <span className="font-semibold">{vehicle.licensePlate}</span></p>
                          <p>🎨 Color: <span className="font-semibold capitalize">{vehicle.color}</span></p>
                          <p>📅 Year: <span className="font-semibold">{vehicle.year}</span></p>
                          {vehicle.mileage && <p>🛣️ Mileage: <span className="font-semibold">{vehicle.mileage.toLocaleString()} km</span></p>}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {!vehicle.isActive && (
                        <button
                          onClick={() => handleSetActive(vehicle.id)}
                          className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Set as active vehicle"
                        >
                          <CheckCircle size={18} />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setEditingVehicle(vehicle)
                          setShowEditModal(true)
                        }}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteVehicle(vehicle.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 flex items-start gap-3">
          <AlertCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-700">
            <p className="font-semibold mb-1">Vehicle Requirements:</p>
            <ul className="space-y-0.5 text-blue-600">
              <li>• Valid registration and insurance</li>
              <li>• License plate must be valid</li>
              <li>• Vehicle must pass inspection</li>
              <li>• Only one vehicle can be active at a time</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add Vehicle Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)}>
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold text-slate-900">Add New Vehicle</h2>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Vehicle Type *</label>
            <select
              value={formData.type}
              onChange={e => setFormData({ ...formData, type: e.target.value })}
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
            >
              {Object.entries(VEHICLE_TYPES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Model *</label>
            <input
              type="text"
              value={formData.model}
              onChange={e => setFormData({ ...formData, model: e.target.value })}
              placeholder="e.g., Hyundai i10"
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">License Plate *</label>
            <input
              type="text"
              value={formData.licensePlate}
              onChange={e => setFormData({ ...formData, licensePlate: e.target.value.toUpperCase() })}
              placeholder="e.g., TN01AB1234"
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Color</label>
              <input
                type="text"
                value={formData.color}
                onChange={e => setFormData({ ...formData, color: e.target.value })}
                placeholder="e.g., White"
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Year</label>
              <input
                type="number"
                value={formData.year}
                onChange={e => setFormData({ ...formData, year: parseInt(e.target.value) })}
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Button fullWidth onClick={handleAddVehicle} loading={loading}>
              Add Vehicle
            </Button>
            <Button fullWidth variant="secondary" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Edit Vehicle Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)}>
        <div className="space-y-4">
          <h2 className="text-xl font-display font-bold text-slate-900">Edit Vehicle</h2>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Vehicle Type</label>
            <select
              value={editingVehicle?.type || 'mini'}
              onChange={e => setEditingVehicle({ ...editingVehicle, type: e.target.value })}
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
            >
              {Object.entries(VEHICLE_TYPES).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Model</label>
            <input
              type="text"
              value={editingVehicle?.model || ''}
              onChange={e => setEditingVehicle({ ...editingVehicle, model: e.target.value })}
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">License Plate</label>
            <input
              type="text"
              value={editingVehicle?.licensePlate || ''}
              onChange={e => setEditingVehicle({ ...editingVehicle, licensePlate: e.target.value.toUpperCase() })}
              className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none uppercase"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Color</label>
              <input
                type="text"
                value={editingVehicle?.color || ''}
                onChange={e => setEditingVehicle({ ...editingVehicle, color: e.target.value })}
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mileage (km)</label>
              <input
                type="number"
                value={editingVehicle?.mileage || 0}
                onChange={e => setEditingVehicle({ ...editingVehicle, mileage: parseInt(e.target.value) })}
                className="w-full p-3 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Button fullWidth onClick={handleUpdateVehicle} loading={loading}>
              Update Vehicle
            </Button>
            <Button fullWidth variant="secondary" onClick={() => setShowEditModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </AppLayout>
  )
}

export default VehicleManagement
