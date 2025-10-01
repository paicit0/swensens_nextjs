// src/app/page.tsx

import Link from "next/link";
import Image from "next/image";
import { createClient } from "../../utils/supabase/server";
import { ChevronDown, MapPin } from "lucide-react";
import ProductList from "./components/ProductList";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("product_id, product_name, product_price");
  console.log("products fetch:", data);
  console.log("products fetch error:", error);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full">
        <section className="container m-auto max-w-[1200px] px-6 h-full space-y-6 py-10">
          {/* Delivery Address Selector */}
          <div className="flex flex-col h-fit lg:flex-col items-start gap-4 md:h-14 md:flex-row md:items-center md:gap-6">
            <div className="flex text-nowrap self-start font-bold text-black ">
              ไปส่งที่:
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-sm border border-gray-300 p-3 bg-gray-50 pointer-events-none">
              <MapPin />
              <div className="relative line-clamp-1 flex grow text-left text-sm font-bold text-black">
                เลือกที่อยู่สำหรับจัดส่ง
              </div>
              <ChevronDown />
            </div>
          </div>

          {/* Hero Banner Skeleton */}
          <div className="aspect-3/1 h-auto w-full rounded-md bg-gray-100">
            <Image
              src="/promo-banner.webp"
              width={500}
              height={500}
              alt="Banner"
            />
          </div>

          {/* Promotions Section */}

          <div className="mb-6 mt-4 text-left text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
            โปรโมชัน
          </div>
          <ProductList initialProducts={data || []} sortType="" />

          {/* Menu Section */}
          <div className="flex items-center justify-between text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
            เมนูจัดส่ง
          </div>

          {/* Menu Section */}
          <div className="flex w-full items-center gap-16 overflow-y-auto overflow-auto pb-4 sm:pb-0 !px-0 gap-x-[12px]">
            <div>ไอศกรีมเค้ก</div>
            <div>ไอศกรีมควอท (450g)</div>
            <div>ไอศกรีมมินิ ควอท (250g)</div>
            <div>ซันเด เซต</div>
            <div>ไอศกรีมสกู๊ป</div>
            <div>ท็อปปิ้ง</div>
          </div>

          <ProductList initialProducts={data || []} sortType="" />
        </section>
      </main>
    </div>
  );
}
