// src/app/register/page.tsx

"use client";

import Link from "next/link";
import { registerUser, registerUserType } from "./action";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerUserType>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthDate: "",
      gender: "male",
    },
  });

  const onSubmit = async (data: registerUserType) => {
    console.log("register/action onSubmit data:", data);
    await registerUser(data);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/login" className="mb-4 text-blue-600 underline">
        กลับ
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-6 rounded-md bg-white shadow-md w-80"
      >
        <h1 className="text-3xl font-bold">Register</h1>

        <label className="flex flex-col gap-2">
          <span>ชื่อ</span>
          <input
            type="text"
            {...register("firstName", {
              required: "กรุณากรอกชื่อ",
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>นามสกุล</span>
          <input
            type="text"
            {...register("lastName", {
              required: "กรุณากรอกนามสกุล",
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>เบอร์โทรศัพท์</span>
          <input
            type="text"
            {...register("phone", {
              required: "กรุณากรอกเบอร์โทรศัพท์",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)",
              },
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>วันเกิด</span>
          <input
            type="date"
            {...register("birthDate", {
              required: "กรุณาเลือกวันเกิด",
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.birthDate && (
            <span className="text-red-500 text-sm">
              {errors.birthDate.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>อีเมล (ไม่ระบุก็ได้)</span>
          <input
            type="email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "กรุณากรอกอีเมลให้ถูกต้อง",
              },
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>รหัสผ่าน</span>
          <input
            type="password"
            {...register("password", {
              required: "กรุณากรอกรหัสผ่าน",
              minLength: {
                value: 8,
                message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
              },
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>เพศ</span>
          <select
            {...register("gender", {
              required: "กรุณาเลือกเพศ",
            })}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="male">ชาย</option>
            <option value="female">หญิง</option>
            <option value="other">ไม่ระบุ</option>
          </select>
          {errors.gender && (
            <span className="text-red-500 text-sm">
              {errors.gender.message}
            </span>
          )}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "กำลังสมัคร..." : "สมัครสมาชิก"}
        </button>
      </form>
    </main>
  );
}
