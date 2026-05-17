// app/(admin)/admin/users/page.jsx
"use client";

import React from "react";

// Data Dummy Pengguna Al-Kahfi Store
const DUMMY_USERS = [
  {
    id: 1,
    name: "Siti Aminah",
    email: "siti.aminah@example.com",
    role: "Customer",
    joined: "12 Jan 2026",
    status: "Active",
    initial: "SA",
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@example.com",
    role: "Affiliator",
    joined: "05 Feb 2026",
    status: "Active",
    initial: "AF",
  },
  {
    id: 3,
    name: "Zahra Nabila",
    email: "zahra.nabila@example.com",
    role: "Customer",
    joined: "20 Mar 2026",
    status: "Suspended",
    initial: "ZN",
  },
  {
    id: 4,
    name: "M. Sidiq",
    email: "sidiq@alkahfi.com",
    role: "Admin",
    joined: "01 Jan 2026",
    status: "Active",
    initial: "MS",
  },
  {
    id: 5,
    name: "Dewi Sartika",
    email: "dewi.sartika@example.com",
    role: "Customer",
    joined: "10 May 2026",
    status: "Active",
    initial: "DS",
  },
];

export default function AdminUsers() {
  return (
    <div className="space-y-8 min-h-[calc(100vh-4rem)] font-sans antialiased text-slate-600">
      {/* 1. USERS CONSOLE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/60 pb-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Users Directory
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Pantau, kelola hak akses peran, dan moderasi akun pengguna
            terdaftar.
          </p>
        </div>

        {/* Search Bar Minimalis */}
        <div className="relative w-full sm:max-w-xs self-start sm:self-auto">
          <input
            type="text"
            placeholder="Search users by name or email..."
            className="w-full bg-white border border-slate-200 pl-9 pr-4 py-2 rounded-xl text-xs outline-none focus:border-emerald-600 transition-all text-slate-700 shadow-sm"
          />
          <span className="absolute left-3 top-2.5 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.603 10.601z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* 2. SUMMARY METRICS MINI */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Total Accounts
            </p>
            <p className="text-xl font-bold text-slate-900 mt-1">1,240 Users</p>
          </div>
          <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg font-medium">
            All platform
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Active This Month
            </p>
            <p className="text-xl font-bold text-slate-900 mt-1">842 Active</p>
          </div>
          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-lg font-medium">
            67.9% Ratio
          </span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Suspended Log
            </p>
            <p className="text-xl font-bold text-slate-900 mt-1">3 Accounts</p>
          </div>
          <span className="text-xs text-rose-600 bg-rose-50 px-2 py-1 rounded-lg font-medium">
            Moderated
          </span>
        </div>
      </div>

      {/* 3. WHITE BENTO DIRECTORY TABLE */}
      <div className="bg-white rounded-3xl shadow-[0_4px_25px_rgba(0,0,0,0.01)] overflow-hidden border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Identity</th>
                <th className="px-6 py-4">System Role</th>
                <th className="px-6 py-4">Registration Date</th>
                <th className="px-6 py-4">Account Status</th>
                <th className="px-6 py-4 text-right">Moderation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
              {DUMMY_USERS.map((user) => {
                // Style dinamis berdasarkan Role
                const roleStyles = {
                  Admin: "bg-slate-900 text-white border-transparent",
                  Affiliator:
                    "bg-indigo-50 text-indigo-700 border-indigo-200/50",
                  Customer: "bg-slate-50 text-slate-600 border-slate-200",
                }[user.role];

                // Style dinamis berdasarkan Status Akun
                const statusStyles = {
                  Active:
                    "bg-emerald-50 text-emerald-700 border-emerald-200/40",
                  Suspended: "bg-rose-50 text-rose-700 border-rose-200/40",
                }[user.status];

                return (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/40 transition-colors group"
                  >
                    {/* Info Profil Mini */}
                    <td className="px-6 py-4 flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 font-bold border border-slate-200 flex items-center justify-center text-[10px] flex-shrink-0 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                        {user.initial}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-slate-400 truncate font-normal mt-0.5">
                          {user.email}
                        </p>
                      </div>
                    </td>

                    {/* Role / Hak Akses */}
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-md font-semibold border ${roleStyles}`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* Tanggal Bergabung */}
                    <td className="px-6 py-4 text-slate-400 font-normal">
                      {user.joined}
                    </td>

                    {/* Status Keaktifan */}
                    <td className="px-6 py-4">
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded-md font-bold border ${statusStyles}`}
                      >
                        {user.status}
                      </span>
                    </td>

                    {/* Opsi Tindakan Pengurus */}
                    <td className="px-6 py-4 text-right">
                      <div className="inline-flex items-center space-x-2">
                        <button className="text-[11px] font-semibold text-slate-400 hover:text-slate-900 px-2 py-1 rounded-lg transition-colors">
                          Details
                        </button>
                        {user.role !== "Admin" && (
                          <button
                            className={`text-[11px] font-semibold px-2 py-1 rounded-lg transition-colors ${
                              user.status === "Active"
                                ? "text-rose-500 hover:bg-rose-50"
                                : "text-emerald-600 hover:bg-emerald-50"
                            }`}
                          >
                            {user.status === "Active" ? "Suspend" : "Unsuspend"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* FOOTER NAVIGASI HALAMAN */}
        <div className="bg-slate-50/50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <p>
            Showing{" "}
            <span className="text-slate-700 font-semibold">
              {DUMMY_USERS.length}
            </span>{" "}
            of <span className="text-slate-700 font-semibold">1,240</span> users
          </p>
          <div className="flex space-x-1.5">
            <button
              className="px-3 py-1.5 bg-white border border-slate-200 text-slate-400 rounded-lg cursor-not-allowed"
              disabled
            >
              Prev
            </button>
            <button className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition-colors shadow-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
