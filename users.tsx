'use client';

import { useEffect, useState } from 'react';
import { AppRole, AppUser, changeUserRole, getUsers } from '@/lib/frontend-contracts';

const roleLabel: Record<AppRole, string> = { SUPER_ADMIN: 'Super Admin', STAFF: 'Staff', USER: 'User' };
const roleClass: Record<AppRole, string> = { SUPER_ADMIN: 'bg-violet-100 text-violet-800', STAFF: 'bg-blue-100 text-blue-800', USER: 'bg-slate-100 text-slate-700' };

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [selected, setSelected] = useState<AppUser | null>(null);
  const [nextRole, setNextRole] = useState<AppRole>('USER');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => { getUsers().then(setUsers); }, []);

  async function saveRole() {
    if (!selected) return;
    setBusy(true); setMessage('');
    const result = await changeUserRole({ userId: selected.id, role: nextRole });
    setMessage(result.message);
    if (result.ok) setUsers((current) => current.map((user) => user.id === selected.id ? { ...user, role: nextRole } : user));
    setBusy(false); setSelected(null);
  }

  return <main className="min-h-screen flex-1 px-4 pb-16 pt-28 sm:px-6 lg:px-10"><div className="mx-auto max-w-7xl">
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-teal">Administrasi</p><h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900">Manajemen Pengguna</h1><p className="mt-2 text-sm text-slate-500">Kelola peran pengguna Setia Tani.</p></div><span className="w-fit rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">DATA DEMO · Backend belum terhubung</span></div>
    {message && <div role="status" className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">{message}</div>}
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-100 px-5 py-4"><h2 className="font-bold text-slate-800">Daftar pengguna</h2><span className="text-sm text-slate-500">{users.length} pengguna demo</span></div><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Pengguna</th><th className="px-5 py-4">Role</th><th className="px-5 py-4">Tanggal Terdaftar</th><th className="px-5 py-4 text-right">Tindakan</th></tr></thead><tbody className="divide-y divide-slate-100">{users.map((user) => <tr key={user.id} className="hover:bg-teal-50/30"><td className="px-5 py-4"><p className="font-bold text-slate-800">{user.name}</p><p className="mt-1 text-xs text-slate-500">{user.email}</p></td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-bold ${roleClass[user.role]}`}>{roleLabel[user.role]}</span></td><td className="px-5 py-4 text-slate-600">{new Date(user.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}</td><td className="px-5 py-4 text-right"><button onClick={() => { setSelected(user); setNextRole(user.role); }} className="rounded-lg border border-teal-200 px-3 py-2 text-xs font-bold text-primary-teal hover:bg-teal-50">Ubah Role</button></td></tr>)}</tbody></table></div></section>
    {selected && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 p-4" role="presentation"><section role="dialog" aria-modal="true" aria-labelledby="role-title" className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"><h2 id="role-title" className="text-xl font-extrabold text-slate-900">Konfirmasi perubahan role</h2><p className="mt-2 text-sm leading-6 text-slate-600">Ubah role untuk <strong>{selected.name}</strong>. Perubahan belum tersimpan sampai dikonfirmasi.</p><label htmlFor="role" className="mb-2 mt-5 block text-sm font-bold text-slate-700">Role baru</label><select id="role" value={nextRole} onChange={(e) => setNextRole(e.target.value as AppRole)} className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none focus:border-primary-teal"><option value="SUPER_ADMIN">Super Admin</option><option value="STAFF">Staff</option><option value="USER">User</option></select><div className="mt-6 flex justify-end gap-2"><button onClick={() => setSelected(null)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600">Batal</button><button disabled={busy} onClick={saveRole} className="rounded-xl bg-primary-teal px-4 py-2.5 text-sm font-bold text-white disabled:opacity-60">{busy ? 'Menyimpan...' : 'Konfirmasi'}</button></div></section></div>}
  </div></main>;
}
