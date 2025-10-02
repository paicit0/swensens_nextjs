// src/app/components/Sidebar.tsx

"use client";

import { ChevronDown, ReceiptText, User } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  return (
    <div className="flex flex-col pl-6 pr-6 pt-16 pb-4">
      <div className="text-[24px] pb-3 font-semibold">
        Login to begin your ice cream journey
      </div>
      <div className="flex flex-col pl-12 pt-4 gap-4 text-[20px]">
        <div className="flex flex-row gap-2 pb-3 -ml-8">
          <div className="self-center">
            <ReceiptText />
          </div>
          <div>คำสั่งซื้อและสั่งอีกครั้ง</div>
        </div>
        <div className="flex flex-row gap-2 pb-3 -ml-8">
          <div className="self-center">
            <User />
          </div>
          <div>โปรไฟล์</div>
        </div>
        <div className="pb-3">เปลี่ยนรหัสผ่าน</div>
        <div className="pb-3">จัดการ PIN</div>
        <div className="pb-3">บัตรเครดิตของฉัน</div>
        <div className="pb-8">สมุดที่อยู่</div>
      </div>
      <div className="flex flex-row justify-between pl-4 pb-8 text-[20px]">
        <div>ภาษา - TH</div>
        <div>
          <ChevronDown size={12}/>
        </div>
      </div>

      <Link href="/login" onClick={onClose}>
        <div className="flex items-center justify-center px-4 py-3 rounded-full font-semibold text-lg text-black bg-red-700 hover:bg-red-600 disabled:bg-gray-400">
          <div className="flex flex-row gap-2 items-center self-center content-center">
            <div><User size={18}/></div>
            <div className="text-white">เข้าสู่ระบบ / ลงทะเบียน</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
