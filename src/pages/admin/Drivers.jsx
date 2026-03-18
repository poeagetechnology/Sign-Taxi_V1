import React, { useEffect, useState } from 'react'
import { Search, CheckCircle, XCircle, Car, ExternalLink } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Avatar from '../../components/common/Avatar'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import Modal from '../../components/common/Modal'
import EmptyState from '../../components/common/EmptyState'
import { getAllDrivers, approveDriver, rejectDriver } from '../../services/driverService'
import { formatDate } from '../../utils/formatters'

const AdminDrivers = () => {
  const [drivers, setDrivers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const [actionId, setActionId] = useState(null)

  const load = async () => {
    try {
      const data = await getAllDrivers()
      setDrivers(data)
      setFiltered(data)
    } catch (err) {
      console.error('AdminDrivers load error:', err)
      toast.error(`Failed to load drivers: ${err.message || err}`)
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  useEffect(() => {
    const q = search.toLowerCase()
    setFiltered(drivers.filter(d =>
      d.name?.toLowerCase().includes(q) ||
      d.vehicleDetails?.plate?.toLowerCase().includes(q)
    ))
  }, [search, drivers])

  const handleApprove = async (driver) => {
    setActionId(driver.id)
    try {
      await approveDriver(driver.id)
      toast.success(`${driver.name} approved`)
      await load()
      setSelected(null)
    } catch { toast.error('Action failed') }
    finally { setActionId(null) }
  }

  const handleReject = async (driver) => {
    setActionId(driver.id)
    try {
      await rejectDriver(driver.id)
      toast.success(`${driver.name} rejected`)
      await load()
      setSelected(null)
    } catch { toast.error('Action failed') }
    finally { setActionId(null) }
  }

  return (
    <AppLayout title="Drivers">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Drivers</h1>
            <p className="text-slate-500 text-sm mt-0.5">{drivers.length} registered drivers</p>
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input className="input-field pl-9 w-64" placeholder="Search drivers…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48"><Spinner /></div>
          ) : filtered.length === 0 ? (
            <EmptyState icon={Car} title="No drivers found" />
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="table-header text-left">Driver</th>
                    <th className="table-header text-left">Vehicle</th>
                    <th className="table-header text-left">Status</th>
                    <th className="table-header text-left">Online</th>
                    <th className="table-header text-left">Joined</th>
                    <th className="table-header text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(driver => (
                    <tr key={driver.id} className="hover:bg-slate-50 transition-colors">
                      <td className="table-cell">
                        <div className="flex items-center gap-3">
                          <Avatar name={driver.name} size="sm" />
                          <div>
                            <p className="font-medium text-slate-900 text-sm">{driver.name}</p>
                            <p className="text-xs text-slate-400">{driver.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td className="table-cell">
                        <p className="text-sm">{driver.vehicleDetails?.make} {driver.vehicleDetails?.model}</p>
                        <p className="text-xs text-slate-400 font-mono">{driver.vehicleDetails?.plate}</p>
                      </td>
                      <td className="table-cell">
                        <Badge variant={driver.isApproved ? 'success' : 'warning'}>
                          {driver.isApproved ? 'Approved' : 'Pending'}
                        </Badge>
                      </td>
                      <td className="table-cell">
                        <Badge variant={driver.isOnline ? 'success' : 'gray'}>
                          {driver.isOnline ? '● Online' : '○ Offline'}
                        </Badge>
                      </td>
                      <td className="table-cell text-xs text-slate-400">{formatDate(driver.createdAt)}</td>
                      <td className="table-cell">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="secondary" onClick={() => setSelected(driver)}>
                            <ExternalLink size={13} /> View
                          </Button>
                          {!driver.isApproved ? (
                            <Button size="sm" variant="success" loading={actionId === driver.id} onClick={() => handleApprove(driver)}>
                              <CheckCircle size={13} /> Approve
                            </Button>
                          ) : (
                            <Button size="sm" variant="danger" loading={actionId === driver.id} onClick={() => handleReject(driver)}>
                              <XCircle size={13} /> Reject
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Driver detail modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title="Driver Details" size="md">
        {selected && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar name={selected.name} size="xl" />
              <div>
                <h3 className="font-semibold text-slate-900 text-lg">{selected.name}</h3>
                <p className="text-slate-500 text-sm">{selected.phone}</p>
                <Badge variant={selected.isApproved ? 'success' : 'warning'} className="mt-1">
                  {selected.isApproved ? 'Approved' : 'Pending Approval'}
                </Badge>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 space-y-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Vehicle</p>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div><p className="text-slate-400 text-xs">Make</p><p className="font-medium">{selected.vehicleDetails?.make || '—'}</p></div>
                <div><p className="text-slate-400 text-xs">Model</p><p className="font-medium">{selected.vehicleDetails?.model || '—'}</p></div>
                <div><p className="text-slate-400 text-xs">Plate</p><p className="font-medium font-mono">{selected.vehicleDetails?.plate || '—'}</p></div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Documents</p>
              <div className="grid grid-cols-2 gap-3">
                {selected.documents?.licenseURL ? (
                  <a href={selected.documents.licenseURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-amber-600 hover:underline">
                    <ExternalLink size={14} /> License
                  </a>
                ) : <p className="text-sm text-slate-400">No license uploaded</p>}
                {selected.documents?.idURL ? (
                  <a href={selected.documents.idURL} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-amber-600 hover:underline">
                    <ExternalLink size={14} /> National ID
                  </a>
                ) : <p className="text-sm text-slate-400">No ID uploaded</p>}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {!selected.isApproved ? (
                <Button fullWidth variant="success" loading={actionId === selected.id} onClick={() => handleApprove(selected)}>
                  <CheckCircle size={16} /> Approve Driver
                </Button>
              ) : (
                <Button fullWidth variant="danger" loading={actionId === selected.id} onClick={() => handleReject(selected)}>
                  <XCircle size={16} /> Revoke Approval
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </AppLayout>
  )
}

export default AdminDrivers
