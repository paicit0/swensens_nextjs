// src/app/page.tsx

"use server";

import Image from "next/image";
import { createClient } from "../utils/supabase/client";
import { ChevronDown, MapPin } from "lucide-react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";

export default async function Home() {
  const supabase = await createClient();
  const supabaseAuth = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("products")
    .select("product_id, product_name, product_price, product_category");
  console.log("products fetch length:", data?.length);
  console.log("home:", supabaseAuth);

  const supabaseSession = await supabase.auth.getSession();
  console.log("[page.jsx] session:", supabaseSession);

  if (error) {
    console.log("products fetch error:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div>{supabaseAuth.data.user?.email}</div>

      <main className="w-full">
        <section className="container m-auto max-w-[1200px] px-6 h-full space-y-6 py-10">
          {/* Delivery Address Selector */}
          <div className="flex flex-col h-fit lg:flex-col items-start gap-4 md:h-14 md:flex-row md:items-center md:gap-6">
            <div className="flex text-nowrap self-start font-bold text-lg text-black ">
              ไปส่งที่:
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-sm border border-gray-300 p-3 bg-gray-50 pointer-events-none">
              <MapPin size={18} />
              <div className="relative line-clamp-1 flex grow text-left text-lg font-bold text-black">
                เลือกที่อยู่สำหรับจัดส่ง
              </div>
              <ChevronDown />
            </div>
          </div>

          {/* Hero Banner Skeleton */}
          <div className="aspect-3/1 h-auto w-full bg-gray-100">
            <Image
              className="rounded-lg"
              src="/promo-banner.webp"
              loading="lazy"
              width={1280}
              height={320}
              alt="Banner"
            />
          </div>

          {/* Promotions Section */}

          <div className="mb-6 mt-4 text-left text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
            โปรโมชัน
          </div>
          <ProductList initialProducts={data || []} category="cake" />

          {/* Menu Section */}
          <div className="flex items-center justify-between text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
            เมนูจัดส่ง
          </div>
          <ProductSection initialProducts={data || []} />
        </section>
      </main>
    </div>
  );
}
