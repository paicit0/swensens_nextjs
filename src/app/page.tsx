"use client";
import { useState } from "react";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header */}
      <header className="hidden lg:flex sticky top-0 z-20 h-20 w-full items-center bg-white px-16 shadow-sm">
        <div className="relative mx-auto w-full max-w-screen-2xl flex items-center justify-between px-12">
          {/* Logo */}
          <div className="flex h-full shrink-0 items-center">
            <a href="/th">
              <div className="w-38 h-10 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                SWENSEN'S
              </div>
            </a>
            <div className="font-black">เข้าสู่ระบบ/ลงทะเบียน</div>
          </div>

          {/* Right Section */}
          <div className="inline-flex items-center space-x-4">
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

            {/* Login Button Skeleton */}
            <div className="h-12 w-36 animate-pulse rounded-full bg-gray-100"></div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 z-20 h-18 w-screen bg-white shadow-sm">
        <div className="relative mx-auto w-full max-w-screen-2xl px-6 py-4">
          <div className="grid w-full grid-cols-[1fr,2fr,1fr] items-center justify-center">
            {/* Hamburger Menu */}
            <div className="flex shrink-0 justify-start">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="flex size-10 items-center justify-center"
              >
                {/* <Menu className="w-6 h-6" /> */}
              </button>
            </div>

            {/* Logo */}
            <a className="flex h-fit shrink-0 justify-center" href="/th">
              <div className="w-36 h-9 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SWENSEN'S
              </div>
            </a>

            {/* Cart Icon */}
            <div className="flex flex-row justify-end">
              <button className="flex size-10 shrink-0 items-center justify-center">
                {/* <ShoppingCart className="w-6 h-6" /> */}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header Spacer */}
      <div className="h-18 w-screen lg:hidden"></div>

      {/* Main Content */}
      <main className="w-full min-h-[calc(100vh-110px-88px)]">
        <section className="container m-auto max-w-[1200px] px-6 h-full space-y-6 py-10">
          {/* Delivery Address Selector */}
          <div className="flex h-fit flex-col items-start gap-4 md:h-14 md:flex-row md:items-center md:gap-6">
            <div className="flex text-nowrap text-base font-bold text-black">
              ไปส่งที่:
            </div>
            <div className="w-full">
              <div className="flex w-full items-center justify-between gap-2 rounded-sm border border-gray-300 p-3 bg-gray-50 pointer-events-none">
                <div className="flex max-w-full items-center gap-2">
                  {/* <MapPin className="w-4 h-4 text-gray-500" /> */}
                  <div className="relative line-clamp-1 flex grow text-left text-sm font-medium text-gray-400">
                    เลือกที่อยู่สำหรับจัดส่ง
                  </div>
                </div>
                {/* <ChevronDown className="w-5 h-5 text-gray-500" /> */}
              </div>
            </div>
          </div>

          {/* Hero Banner Skeleton */}
          <div className="aspect-[32/9] h-auto w-full animate-pulse rounded-md bg-gray-100"></div>

          {/* Flash Deal Section Skeleton */}
          <div className="min-h-[180px] w-full py-4">
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
              <h2 className="mb-6 mt-4 text-left text-xl font-bold sm:text-2xl 2xl:text-3xl">
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
            <div className="flex text-xl font-bold sm:text-2xl 2xl:text-3xl">
              เมนูจัดส่ง
            </div>
          </div>

          {/* Menu Tabs Skeleton */}
          <div className="flex w-full flex-col items-center gap-11">
            <div className="flex w-full flex-col gap-4">
              <div className="h-5 w-full animate-pulse bg-gray-100 rounded-md"></div>
              <div className="h-5 w-20 animate-pulse bg-gray-100 rounded-md"></div>
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

      {/* Footer */}
      <footer className="bg-black">
        <div className="flex size-full items-center justify-center border-none px-5 py-6 lg:h-28 lg:px-12">
          <div className="relative mx-auto w-full max-w-screen-2xl pb-6">
            <div className="flex size-full w-full shrink-0 flex-col items-start justify-start gap-3 border-none lg:flex-row lg:items-center lg:justify-between">
              {/* Logo */}
              <div className="text-white font-bold text-2xl mb-3 lg:mb-0">
                SWENSEN'S
              </div>

              {/* Footer Links */}
              <div className="flex grow flex-col gap-3 lg:flex-row lg:justify-evenly">
                <div className="flex flex-wrap items-center gap-3 lg:grow lg:justify-evenly">
                  {[
                    "เกี่ยวกับเรา",
                    "สินค้าของเรา",
                    "บัตรของขวัญ",
                    "คำถามที่พบบ่อย",
                    "ข้อกำหนดในการใช้งาน",
                    "นโยบายความเป็นส่วนตัว",
                  ].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="px-1 py-2 text-sm text-white hover:text-gray-300 lg:py-0"
                    >
                      {link}
                    </a>
                  ))}
                </div>

                {/* Social & App Store Links */}
                <div className="flex flex-row flex-wrap items-center justify-start gap-3 lg:justify-center">
                  <div className="flex shrink-0 space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-white rounded-full"
                      ></div>
                    ))}
                  </div>
                  <div className="flex shrink-0 space-x-2">
                    <div className="h-8 w-28 bg-white rounded"></div>
                    <div className="h-8 w-28 bg-white rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex w-full flex-col-reverse items-center justify-center border-none pt-4 lg:pt-0">
              <div className="text-sm text-white">
                Copyright © Swensen1112.com. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
