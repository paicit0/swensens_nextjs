// src/app/register/page.tsx
"use client";

import Link from "next/link";
import { registerUser } from "./action";
import { useState } from "react";
import { registerUserType } from "./action";

export default function RegisterPage() {
  const [form, setForm] = useState<registerUserType>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthDate: "",
    gender: "male",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerUser(form);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/login" className="mb-4 text-blue-600 underline">
        กลับ
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded-md bg-white shadow-md w-80"
      >
        <h1 className="text-3xl font-bold">Register</h1>

        <label className="flex flex-col gap-2">
          <span>ชื่อ</span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>นามสกุล</span>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>เบอร์โทรศัพท์</span>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>วันเกิด</span>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>อีเมล (ไม่ระบุก็ได้)</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>รหัสผ่าน</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span>เพศ</span>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">ไม่ระบุ</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          สมัครสมาชิก
        </button>
      </form>
    </main>
  );
}
