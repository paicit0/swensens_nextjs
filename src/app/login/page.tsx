// src/app/login/page.tsx

"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/">กลับ</Link>
      <form className="flex flex-col gap-4 p-6 rounded-md bg-white shadow-md">
        <h1 className="text-3xl font-bold">Login</h1>
        <label className="flex flex-col gap-2">
          <span>Username</span>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Password</span>
          <input
            type="password"
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
      <div className="flex flex-row gap-4">
        <div>ยังไม่มีบัญชีใช่หรือไม่</div>
        <Link href="/register" className="underline">
          สร้างบัญชี
        </Link>
      </div>
    </main>
  );
}
