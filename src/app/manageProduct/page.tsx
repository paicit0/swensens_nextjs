// src/app/manageProduct/page.tsx

"use client";

import { useForm } from "react-hook-form";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./action";
import { useEffect, useState } from "react";
import { productType } from "./action";

type productInput = {
  product_name: string;
  product_price: number;
};

export default function adminPage() {
  const [products, setProducts] = useState<productType[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<productInput>();
  const onSubmit = async (data: productInput) => {
    addProduct(data);
    console.log(data);
  };

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      console.log(products);
      setProducts(products);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      {products.map((product) => (
        <div className="flex flex-row" key={product.product_id}>
          <p>{product.product_name}</p>
          <p>{product.product_price}</p>
        </div>
      ))}

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="ชื่อสินค้า" {...register("product_name")} />
        <input defaultValue="ราคาสินค้า" {...register("product_price")} />
        <input type="submit" value="เพิ่มสินค้า" />
      </form>
    </div>
  );
}
