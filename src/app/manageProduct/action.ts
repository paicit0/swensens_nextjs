// src/app/manageProduct/action.ts

"use server";

import { createClient } from "../../utils/supabase/server";

export interface productType {
  product_id?: string;
  product_name: string;
  product_price: number;
}

export async function getProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("product_id,product_name, product_price");
  if (error) {
    throw new Error(error.message);
  }
  console.log("[manageProduct/action.ts] getProducts", data);
  return data;
}

export async function addProduct(product: productType) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("products").insert(product);
  if (error) {
    throw new Error(error.message);
  }
  console.log("[manageProduct/action.ts] addProduct", data);
  return data;
}

export async function deleteProduct(product: productType) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .delete()
    .eq("productid", product.product_id);
  if (error) {
    throw new Error(error.message);
  }
  console.log("[manageProduct/action.ts] deleteProduct", data);
  return data;
}

export async function updateProduct(product: productType) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .update(product)
    .eq("productid", product.product_id);
  if (error) {
    throw new Error(error.message);
  }
  console.log("[manageProduct/action.ts] updateProduct", data);
  return data;
}
