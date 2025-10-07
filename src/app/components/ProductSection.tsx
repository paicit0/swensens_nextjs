// src/app/components/ProductSection.tsx

"use client";
import { useState } from "react";
import ProductList from "./ProductList";
import { Product } from "./ProductList";

export default function ProductSection({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [sortType, setSortType] = useState("cake");
  const activeStyle =
    "h-[32px] p-2 mb-1 rounded-lg whitespace-nowrap text-sm font-medium border border-red-500 text-red-500 font-bold";
  const baseStyle =
    "h-[32px] p-2 mb-1 rounded-lg whitespace-nowrap text-sm font-medium border text-gray-400 font-bold";

  return (
    <div className="flex flex-col gap-[44px]">
      <div className="flex gap-[32px] overflow-auto">
        <button
          className={sortType === "cake" ? activeStyle : baseStyle}
          onClick={() => setSortType("cake")}
        >
          ไอศกรีมเค้ก
        </button>
        <button
          className={sortType === "quart450g" ? activeStyle : baseStyle}
          onClick={() => setSortType("quart450g")}
        >
          ไอศกรีมควอท (450g)
        </button>
        <button
          className={sortType === "mini250g" ? activeStyle : baseStyle}
          onClick={() => setSortType("mini250g")}
        >
          ไอศกรีมมินิ ควอท (250g)
        </button>
        <button
          className={sortType === "sundaeset" ? activeStyle : baseStyle}
          onClick={() => setSortType("sundaeset")}
        >
          ซันเด เซต
        </button>
        <button
          className={sortType === "scoop" ? activeStyle : baseStyle}
          onClick={() => setSortType("scoop")}
        >
          ไอศกรีมสกู๊ป
        </button>
        <button
          className={sortType === "topping" ? activeStyle : baseStyle}
          onClick={() => setSortType("topping")}
        >
          ท็อปปิ้ง
        </button>
      </div>

      <ProductList initialProducts={initialProducts} category={sortType} />
    </div>
  );
}
