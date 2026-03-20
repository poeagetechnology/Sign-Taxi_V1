import React, { useEffect, useState } from 'react'
import { Search, UserX, UserCheck, Users } from 'lucide-react'
import toast from 'react-hot-toast'
import AppLayout from '../../components/layout/AppLayout'
import Spinner from '../../components/common/Spinner'
import Avatar from '../../components/common/Avatar'
import Badge from '../../components/common/Badge'
import Button from '../../components/common/Button'
import EmptyState from '../../components/common/EmptyState'
import { getAllUsers, blockUser, unblockUser } from '../../services/userService'
import { formatDate } from '../../utils/formatters'

const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [actionId, setActionId] = useState(null)

  const load = async () => {
    try {
      const data = await getAllUsers()
      // Only non-admin, non-driver users
      const passengers = data.filter(u => u.role === 'user')
      setUsers(passengers)
      setFiltered(passengers)
    } catch (err) {
      console.error('AdminUsers load error:', err)
      toast.error(`Failed to load users: ${err.message || err}`)
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  useEffect(() => {
    const q = search.toLowerCase()
    setFiltered(users.filter(u =>
      u.name?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q) ||
      u.phone?.includes(q)
    ))
  }, [search, users])

  const handleBlock = async (user) => {
    setActionId(user.id)
    try {
      if (user.status === 'blocked') {
        await unblockUser(user.id)
        toast.success(`${user.name} unblocked`)
      } else {
        await blockUser(user.id)
        toast.success(`${user.name} blocked`)
      }
      await load()
    } catch { toast.error('Action failed') }
    finally { setActionId(null) }
  }

  return (
    <AppLayout title="Users">
      <div className="space-y-5">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold text-slate-900">Users</h1>
            <p className="text-slate-500 text-sm mt-0.5">{users.length} registered passengers</p>
          </div>
          <div className="relative w-full sm:w-auto">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              className="input-field pl-9 w-full sm:w-64"
              placeholder="Search users…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-48"><Spinner /></div>
          ) : filtered.length === 0 ? (
            <EmptyState icon={Users} title="No users found" description="No passengers match your search." />
          ) : (
            <>
              {/* Mobile Card View */}
              <div className="md:hidden space-y-3 p-4">
                {filtered.map(user => (
                  <div key={user.id} className="border border-slate-200 rounded-xl p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar name={user.name} photoURL={user.photoURL} size="sm" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-400 truncate">{user.email}</p>
                        <p className="text-xs text-slate-500 mt-1">{user.phone || 'No phone'}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Badge variant={user.status === 'active' ? 'success' : 'error'} className="text-xs">
                          {user.status === 'active' ? '● Active' : '● Blocked'}
                        </Badge>
                        <p className="text-xs text-slate-400">{formatDate(user.createdAt)}</p>
                      </div>
                      <Button
                        variant={user.status === 'active' ? 'danger' : 'success'}
                        size="sm"
                        loading={actionId === user.id}
                        onClick={() => handleBlock(user)}
                      >
                        {user.status === 'active' ? <UserX size={14} /> : <UserCheck size={14} />}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="table-header text-left">User</th>
                      <th className="table-header text-left">Phone</th>
                      <th className="table-header text-left">Status</th>
                      <th className="table-header text-left">Joined</th>
                      <th className="table-header text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(user => (
                      <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                        <td className="table-cell">
                          <div className="flex items-center gap-3">
                            <Avatar name={user.name} photoURL={user.photoURL} size="sm" />
                            <div>
                              <p className="font-medium text-slate-900 text-sm">{user.name}</p>
                              <p className="text-xs text-slate-400">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="table-cell text-slate-500">{user.phone || '—'}</td>
                        <td className="table-cell">
                          <Badge variant={user.status === 'active' ? 'success' : 'error'}>
                            {user.status === 'active' ? '● Active' : '● Blocked'}
                          </Badge>
                        </td>
                        <td className="table-cell text-xs text-slate-400">{formatDate(user.createdAt)}</td>
                        <td className="table-cell">
                          <Button
                            variant={user.status === 'active' ? 'danger' : 'success'}
                            size="sm"
                            loading={actionId === user.id}
                            onClick={() => handleBlock(user)}
                          >
                            {user.status === 'active' ? <><UserX size={14} /> Block</> : <><UserCheck size={14} /> Unblock</>}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  )
}

export default AdminUsers
