// src/app/register/page.tsx

"use client";

import Link from "next/link";
import { registerUser, registerUserType } from "./action";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "lucide-react";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<registerUserType>({
    defaultValues: {
      user_role: "",
      user_email: "",
      user_password: "",
      user_firstName: "",
      user_lastName: "",
      user_phone: "",
      user_birthDate: "",
      user_gender: "",
    },
  });

  const onSubmit = async (data: registerUserType) => {
    console.log("register/action onSubmit data:", data);
    await registerUser(data);
  };

  return (
    <main className="flex flex-col pt-6 pb-6 items-center justify-center min-h-screen bg-gray-200">
      <form
        className="flex flex-col gap-4 p-6 rounded-md bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Link href="/login">
          <div className="flex flex-row self-start">
            <ChevronLeft />
            <div>กลับ</div>
          </div>
        </Link>
        <h1 className="text-[33px] font-bold">
          สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
        </h1>

        <label className="flex flex-col gap-2">
          <span>ชื่อ</span>
          <input
            type="text"
            {...register("user_firstName", {
              required: "กรุณากรอกชื่อ",
            })}
            placeholder="ชื่อ"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_firstName && (
            <span className="text-red-500 text-sm">
              {errors.user_firstName.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>นามสกุล</span>
          <input
            type="text"
            {...register("user_lastName", {
              required: "กรุณากรอกนามสกุล",
            })}
            placeholder="นามสกุล"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_lastName && (
            <span className="text-red-500 text-sm">
              {errors.user_lastName.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>เบอร์โทรศัพท์</span>
          <input
            type="text"
            {...register("user_phone", {
              required: "กรุณากรอกเบอร์โทรศัพท์",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)",
              },
            })}
            placeholder="เบอร์โทรศัพท์"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_phone && (
            <span className="text-red-500 text-sm">
              {errors.user_phone.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>วันเกิด</span>
          <input
            type="date"
            {...register("user_birthDate", {
              required: "กรุณาเลือกวันเกิด",
            })}
            placeholder="วว/ดด/ปปปป"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_birthDate && (
            <span className="text-red-500 text-sm">
              {errors.user_birthDate.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>อีเมล (ไม่ระบุก็ได้)</span>
          <input
            type="email"
            {...register("user_email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "กรุณากรอกอีเมลให้ถูกต้อง",
              },
            })}
            placeholder="อีเมล (ไม่ระบุได้)"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_email && (
            <span className="text-red-500 text-sm">
              {errors.user_email.message}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>รหัสผ่าน</span>
          <input
            type="password"
            {...register("user_password", {
              required: "กรุณากรอกรหัสผ่าน",
              minLength: {
                value: 8,
                message: "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร",
              },
            })}
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.user_password && (
            <span className="text-red-500 text-sm">
              {errors.user_password.message}
            </span>
          )}
        </label>

        <div className="flex flex-col gap-2">
          <span>เพศ</span>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="male"
                {...register("user_gender", {
                  required: "กรุณาเลือกเพศ",
                })}
                className="form-radio text-indigo-600"
              />
              <span>ชาย</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="female"
                {...register("user_gender")}
                className="form-radio text-indigo-600"
              />
              <span>หญิง</span>
            </label>

            <label className="flex items-center gap-1">
              <input
                type="radio"
                value="other"
                defaultChecked
                {...register("user_gender")}
                className="form-radio text-indigo-600"
              />
              <span>ไม่ระบุ</span>
            </label>
          </div>
          {errors.user_gender && (
            <span className="text-red-500 text-sm">
              {errors.user_gender.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full text-white font-bold py-5 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed bg-red-400 "
        >
          {isSubmitting ? "กำลังสมัคร..." : "สร้างบัญชี"}
        </button>
        <div className="flex flex-row gap-2 self-center">
          <div>มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่</div>
          <Link href="/login" className=" underline">
            เข้าสู่ระบบ
          </Link>
        </div>
        <div className="flex flex-row">
          <input type="checkbox" defaultChecked></input>
          <div>ฉันได้อ่านและยอมรับ</div>
          <button className="text-blue-500 underline">ข้อกำหนดการใช้งาน</button>
          <div>และ</div>
          <button className="text-blue-500 underline">
            นโยบายความเป็นส่วนตัว
          </button>
          <div> ของสเวนเซ่นส์</div>
        </div>
        <div className="flex flex-row">
          <input type="checkbox"></input>
          <div>
            ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ
            จากสเวนเซ่นส์และ
          </div>
          <button className="text-blue-500 underline">บริษัทในเครือ</button>

          <div>
            โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ
            สามารถศึกษาเงื่อนไขหรือข้อตกลง
          </div>
          <button className="text-blue-500 underline">
            นโยบายความเป็นส่วนตัว
          </button>
          <div> เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ</div>
        </div>
      </form>
    </main>
  );
}
