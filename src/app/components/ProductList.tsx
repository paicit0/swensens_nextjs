// src/app/components/ProductList.tsx

"use client";

import { useEffect, useState } from "react";

export type Product = {
  product_id: string;
  product_name: string;
  product_price: number;
  product_category: string;
};

export default function ProductList({
  initialProducts,
  category,
}: {
  initialProducts: Product[];
  category: string;
}) {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category) {
      const filteredProducts = products.filter(
        (product) => product.product_category === category
      );
      setFilteredProducts(filteredProducts);
    }
  }, [category]);

  return (
    <div className="flex w-full flex-col items-center gap-11">
      <div className="w-full">
        <div className="grid h-fit w-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts?.map((item) => (
            <div
              key={item.product_id}
              className="flex h-auto w-full flex-col justify-between overflow-hidden rounded-2xl border border-solid border-gray-200"
            >
              <div className="flex flex-col gap-1">
                <img className="flex aspect-[4/3] width-[296px] bg-gray-100 rounded-lg"></img>
                <div className="flex relative h-fit flex-col gap-1 p-3">
                  <div className="absolute top-[-11px] right-[16px] w-[32px] h-[32px] bg-red-500 rounded-full text-2xl flex justify-center items-center">
                    <span className="transform -translate-y-[3px] text-white">+</span>
                  </div>
                  <div className="text-red-400 font-bold">฿ {item.product_price}</div>
                  <div className="font-bold">{item.product_name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
