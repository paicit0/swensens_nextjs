// src/app/login/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { loginUser, loginUserType } from "./action";
import { useForm } from "react-hook-form";
import { ChevronLeft, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [emailMode, setEmailMode] = useState(false);
  const router = useRouter();

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
    const result = await loginUser(data);
    console.log("[login/page.tsx] result:", result);
    if (result.success) {
      console.log("[login/page.tsx] login successful");
      router.push("/");
      router.refresh();
    } else {
      console.error("[login/page.tsx] login failed");
    }
  };

  return (
    <main className="flex flex-col justify-start min-h-screen bg-gray-200">
      <form
        className="flex flex-col gap-8 p-6 mt-5 rounded-md bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href="/">
          <div className="flex flex-row self-start">
            <ChevronLeft />
            <div>กลับ</div>
          </div>
        </Link>
        <h1 className="text-[33px] font-bold">
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
            <div className="flex flex-row">
              <span>เบอร์โทรศัพท์</span>
              <span className="text-red-400">*</span>
            </div>

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
          <button className="px-4 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold ">
            ดำเนินการต่อ
          </button>
        )}
        <div className="flex flex-row self-center">
          <div className="flex-1 border-t border-border-line"></div>
          <div>หรือ</div>
          <div className="flex-1 border-t border-border-line"></div>
        </div>
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
            className="flex rounded-full border border-gray-400 px-4 py-2.5 justify-center gap-2"
            onClick={() => {
              setEmailMode(true);
            }}
          >
            <div>
              <Mail />
            </div>
            เข้าสู่ระบบด้วยอีเมล
          </button>
        )}

        <div className="flex flex-row gap-4 self-center">
          <div>ยังไม่มีบัญชีใช่หรือไม่</div>
          <Link href="/register" className="underline">
            สร้างบัญชี
          </Link>
        </div>
      </form>
    </main>
  );
}
