// src/app/components/Sidebar.tsx

"use client";

import Link from "next/link";

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="flex flex-col">
      <div>Login to begin your ice cream journey</div>
      <div>คำสั่งซื้อและสั่งอีกครั้ง</div>
      <div>โปรไฟล์</div>
      <div>เปลี่ยนรหัสผ่าน</div>
      <div>จัดการ PIN</div>
      <div>บัตรเครดิตของฉัน</div>
      <div>สมุดที่อยู่</div>
      <div>ภาษา - TH</div>
      <Link href="/login" onClick={onClose}>
        <div className="relative lg:flex items-center justify-center gap-2 h-12 min-w-[12rem] px-4 py-3 rounded-full font-semibold text-lg text-black bg-red-700 hover:bg-red-600 disabled:bg-gray-400">
          <div className="flex items-center">เข้าสู่ระบบ / ลงทะเบียน</div>
        </div>
      </Link>
    </div>
  );
}
