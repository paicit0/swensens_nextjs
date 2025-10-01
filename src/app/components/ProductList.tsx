// src/components/ProductList.tsx (Client Component)

"use client";

import { useState } from "react";

type Product = {
  product_id: string;
  product_name: string;
  product_price: number;
};

export default function ProductList({
  initialProducts, sortType
}: {
  initialProducts: Product[];
  sortType: string;
}) {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState<"name" | "price">("name");

  const handleSort = (type: "name" | "price") => {
    setSortBy(type);
    const sorted = [...products].sort((a, b) => {
      if (type === "name") {
        return a.product_name.localeCompare(b.product_name);
      }
      return a.product_price - b.product_price;
    });
    setProducts(sorted);
  };

  return (
    <div className="flex w-full flex-col items-center gap-11">
      <div className="w-full">
        <div className="grid h-fit w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((item) => (
            <div
              key={item.product_id}
              className="flex h-auto w-full flex-col justify-between overflow-hidden rounded-lg border border-solid border-gray-200"
            >
              <div className="flex flex-col gap-1">
                <div className="flex aspect-[4/3] h-auto w-full bg-gray-100 rounded-lg"></div>
                <div className="mb-3 flex h-fit flex-col gap-1 p-3">
                  {item.product_price}
                  {item.product_name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
