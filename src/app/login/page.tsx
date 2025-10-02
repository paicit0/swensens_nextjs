// src/app/login/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { loginUser, loginUserType } from "./action";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const [emailMode, setEmailMode] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginUserType>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: loginUserType) => {
    await loginUser(data);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/">กลับ</Link>
      <form
        className="flex flex-col gap-4 p-6 rounded-md bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold">
          ยินดีต้อนรับสมาชิก Swensen's เข้าสู่ระบบแล้วเริ่มสั่งไอศกรีมกันเลย!
        </h1>
        {emailMode ? (
          <div>
            <label className="flex flex-col gap-2">
              <span>อีเมล</span>
              <input
                type="text"
                {...register("email", {
                  required: "กรุณากรอกอีเมล",
                })}
                className="border border-gray-300 rounded-md p-2"
                placeholder="อีเมล"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>รหัสผ่าน</span>
              <input
                type="password"
                {...register("password", {
                  required: "กรุณากรอกอีเมล",
                })}
                className="border border-gray-300 rounded-md p-2"
                placeholder="รหัสผ่าน"
              />
            </label>
          </div>
        ) : (
          <label className="flex flex-col gap-2">
            <span>เบอร์โทรศัพท์</span>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2"
              placeholder="กรอกเบอร์โทรศัพท์"
            />
          </label>
        )}
        {emailMode ? (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            เข้าสู่ระบบ
          </button>
        ) : (
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            ดำเนินการต่อ
          </button>
        )}
      </form>

      <div>หรือ</div>
      {emailMode ? (
        <button
          onClick={() => {
            setEmailMode(false);
          }}
        >
          เข้าสู่ระบบด้วยเบอร์โทรศัพท์
        </button>
      ) : (
        <button
          onClick={() => {
            setEmailMode(true);
          }}
        >
          เข้าสู่ระบบด้วยอีเมล
        </button>
      )}

      <div className="flex flex-row gap-4">
        <div>ยังไม่มีบัญชีใช่หรือไม่</div>
        <Link href="/register" className="underline">
          สร้างบัญชี
        </Link>
      </div>
    </main>
  );
}
