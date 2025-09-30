// src/app/page.tsx

import Link from "next/link";
import Image from "next/image";
import { createClient } from "../../utils/supabase/server";
import { ChevronDown, MapPin } from "lucide-react";

export default async function Home() {
  const supabase = createClient();

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

          {/* Flash Deal Section Skeleton */}
          <div className="hidden min-h-[180px] w-full py-4">
            <div className="px-4 pb-2">
              <div className="h-6 w-32 animate-pulse bg-gray-100 rounded-md lg:h-9 lg:w-48"></div>
            </div>
            <div className="flex gap-4 overflow-x-auto px-4 hide-scrollbar">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-28 w-40 shrink-0 animate-pulse bg-gray-100 rounded-lg lg:h-48 lg:w-72"
                ></div>
              ))}
            </div>
          </div>

          {/* Promotions Section */}
          <div className="flex w-full flex-col items-center gap-11">
            <div className="w-full">
              <h2 className="mb-6 mt-4 text-left text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
                โปรโมชัน
              </h2>
              <div className="grid h-fit w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex h-auto w-full flex-col justify-between overflow-hidden rounded-lg border border-solid border-gray-200"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex aspect-[4/3] h-auto w-full animate-pulse bg-gray-100 rounded-lg"></div>
                      <div className="mb-3 flex h-fit flex-col gap-1 p-3">
                        <div className="flex h-5 w-16 animate-pulse bg-gray-100 rounded-lg"></div>
                        <div className="flex h-5 w-full animate-pulse bg-gray-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex items-center justify-between">
            <div className="flex text-xl font-bold sm:text-2xl 2xl:text-3xl text-black">
              เมนูจัดส่ง
            </div>
          </div>

          {/* Menu Tabs Skeleton */}
          <div className="flex w-full flex-col items-center gap-11">
            <div className="flex w-full items-center gap-16 overflow-y-auto overflow-auto pb-4 sm:pb-0 !px-0 gap-x-[12px]">
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
              <div>ไอศกรีมเค้ก</div>
            </div>

            {/* Menu Grid Skeleton */}
            <div className="grid h-fit w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="flex h-auto w-full flex-col justify-between overflow-hidden rounded-lg border border-solid border-gray-200"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex aspect-[4/3] h-auto w-full animate-pulse bg-gray-100 rounded-lg"></div>
                    <div className="mb-3 flex h-fit flex-col gap-1 p-3">
                      <div className="flex h-5 w-16 animate-pulse bg-gray-100 rounded-lg"></div>
                      <div className="flex h-5 w-full animate-pulse bg-gray-100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
