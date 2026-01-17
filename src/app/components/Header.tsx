// components/Header.tsx

"use client";

import { Globe, Handbag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { createClient } from "../../utils/supabase/client";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.refresh();
  };

  return (
    <header className="flex sticky z-50 pt-4 pb-4 pl-6 pr-6 w-full bg-white">
      <div className="flex justify-between w-full gap-6 self-center">
        <div className="flex lg:hidden self-center">
          <button onClick={() => setIsOpened(true)}>
            <Menu color="black" />
          </button>

          {isOpened && (
            <div>
              <div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setIsOpened(false)}
              />
              <div className="fixed w-4/5 h-full top-0 left-0 z-50 bg-white shadow-2xl">
                <div className="absolute right-0.5 top-0.1">
                  <button
                    className="p-2 hover:bg-blue-600 rounded-full transition-colors"
                    onClick={() => setIsOpened(false)}
                  >
                    <X color="red" size={24} />
                  </button>
                </div>
                <Sidebar onClose={() => setIsOpened(false)} />
              </div>
            </div>
          )}
        </div>

        <Link href="/">
          <div className="flex items-center justify-center w-38 h-10 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg  text-white font-bold text-xl">
            SWENSEN'S
          </div>
        </Link>

        <div className="flex flex-row">
          <div className="flex self-center">
            <Handbag color="black" />
          </div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="hidden lg:block text-black font-semibold">
                {user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="relative lg:flex hidden items-center justify-center gap-2 h-12 px-4 py-3 rounded-full font-semibold text-lg text-white bg-red-700 hover:bg-red-600 disabled:bg-gray-400"
              >
                ออกจากระบบ
              </button>
            </div>
          ) : (
            <Link href="/login" className="">
              <button className="relative lg:flex hidden items-center justify-center gap-2 h-12 min-w-[12rem] px-4 py-3 rounded-full font-semibold text-lg text-white bg-red-700 hover:bg-red-600 disabled:bg-gray-400">
                <div className="flex items-center">เข้าสู่ระบบ / ลงทะเบียน</div>
              </button>
            </Link>
          )}
          <div className="flex-row hidden lg:flex">
            <Globe color="black" />
            <div className="text-black">TH</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        {/* Cart Button */}
        <button className="relative size-12 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          {/* <ShoppingCart className="w-8 h-8 text-gray-700" /> */}
        </button>

        {/* Floating Cart */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex">
          <div className="relative flex h-28 w-22 flex-col items-center justify-center gap-1 rounded-l-lg px-2 py-4 bg-gradient-to-b from-red-500 to-pink-600 shadow-lg cursor-pointer transition-all hover:w-24">
            {/* <ShoppingCart className="w-6 h-6 text-white" /> */}
            <div className="text-center text-sm font-bold text-white">
              ตะกร้า
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
