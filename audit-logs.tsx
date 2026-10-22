'use client';

import { useEffect, useState } from 'react';
import { AuditAction, AuditLog, getAuditLogs } from '@/lib/frontend-contracts';

const actionLabel: Record<AuditAction, string> = { USER_LOGIN: 'Login', USER_LOGOUT: 'Logout', LOGIN_FAILED: 'Login gagal', CREATE_PRODUCT: 'Create', UPDATE_PRODUCT: 'Update', DELETE_PRODUCT: 'Delete', ROLE_CHANGE: 'Role berubah' };
function actionClass(action: AuditAction) {
  if (action === 'CREATE_PRODUCT') return 'bg-green-100 text-green-800';
  if (action === 'UPDATE_PRODUCT' || action === 'ROLE_CHANGE') return 'bg-amber-100 text-amber-800';
  if (action === 'DELETE_PRODUCT' || action === 'LOGIN_FAILED') return 'bg-red-100 text-red-800';
  return 'bg-blue-100 text-blue-800';
}

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [search, setSearch] = useState('');
  const [action, setAction] = useState('ALL');
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getAuditLogs({ page, limit: 5, search, action }).then((result) => {
      if (cancelled) return;
      setLogs(result.data); setTotalCount(result.totalCount); setTotalPages(result.totalPages); setPage(result.currentPage); setLoading(false);
    }).catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [page, search, action]);

  function exportCsv() {
    const header = ['Waktu', 'Nama User', 'Aksi', 'Resource', 'Alamat IP'];
    const rows = logs.map((log) => [new Date(log.createdAt).toISOString(), log.userName, actionLabel[log.action], log.resource, log.ipAddress]);
    const csvCell = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const csv = '\uFEFF' + [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = `audit-log-export-${new Date().toISOString().slice(0, 10)}-demo.csv`; anchor.click(); URL.revokeObjectURL(url);
  }

  return <main className="min-h-screen flex-1 px-4 pb-16 pt-28 sm:px-6 lg:px-10"><div className="mx-auto max-w-7xl">
    <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-teal">Administrasi</p><h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-slate-900">Audit Trail</h1><p className="mt-2 text-sm text-slate-500">Riwayat aktivitas dan perubahan di sistem.</p></div><div className="flex flex-wrap items-center gap-2"><span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800">DATA DEMO</span><button onClick={exportCsv} className="rounded-xl bg-primary-teal px-4 py-2.5 text-sm font-bold text-white hover:bg-primary-dark">↓ Export CSV (halaman ini)</button></div></div>
    <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900">Backend Orang 3 belum tersedia. CSV saat ini hanya mengekspor data demo pada halaman aktif, bukan seluruh audit log produksi.</div>
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center"><div className="relative flex-1"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">⌕</span><input aria-label="Cari nama user atau resource" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} placeholder="Cari nama user, aksi, atau resource..." className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary-teal focus:ring-4 focus:ring-teal-100" /></div><select aria-label="Filter tipe aksi" value={action} onChange={(e) => { setAction(e.target.value); setPage(1); }} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary-teal"><option value="ALL">Semua aksi</option><option value="USER_LOGIN">Login</option><option value="USER_LOGOUT">Logout</option><option value="LOGIN_FAILED">Login gagal</option><option value="CREATE_PRODUCT">Create</option><option value="UPDATE_PRODUCT">Update</option><option value="DELETE_PRODUCT">Delete</option><option value="ROLE_CHANGE">Role berubah</option></select></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Waktu / Tanggal</th><th className="px-5 py-4">Nama User</th><th className="px-5 py-4">Aksi</th><th className="px-5 py-4">Resource</th><th className="px-5 py-4">Alamat IP</th></tr></thead><tbody className="divide-y divide-slate-100">{loading ? <tr><td colSpan={5} className="px-5 py-12 text-center text-slate-500">Memuat data...</td></tr> : logs.length === 0 ? <tr><td colSpan={5} className="px-5 py-12 text-center text-slate-500">Tidak ada log yang sesuai filter.</td></tr> : logs.map((log) => <tr key={log.id} className="hover:bg-teal-50/30"><td className="whitespace-nowrap px-5 py-4 text-slate-600">{new Date(log.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}</td><td className="px-5 py-4 font-semibold text-slate-800">{log.userName}</td><td className="px-5 py-4"><span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ${actionClass(log.action)}`}>{actionLabel[log.action]}</span></td><td className="px-5 py-4 text-slate-600">{log.resource}</td><td className="px-5 py-4 font-mono text-xs text-slate-600">{log.ipAddress}</td></tr>)}</tbody></table></div>
      <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-slate-500">Total {totalCount} log demo · Halaman {page} dari {totalPages}</p><div className="flex items-center gap-1"><button disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40">Prev</button>{Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => <button key={n} onClick={() => setPage(n)} aria-current={page === n ? 'page' : undefined} className={`h-9 min-w-9 rounded-lg px-3 text-sm font-bold ${page === n ? 'bg-primary-teal text-white' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'}`}>{n}</button>)}<button disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 disabled:opacity-40">Next</button></div></div>
    </section>
  </div></main>;
}
