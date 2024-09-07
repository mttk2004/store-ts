/**
 *  Project: store-ts
 *  File: Products.tsx
 *  Created: 12:18 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { customFetch, ProductsResponse } from "@/utils";
import { useLoaderData } from "react-router-dom";

function Products() {
  const data = useLoaderData();
  console.log(data);

  return <div></div>;
}

export const loader = async function (): Promise<ProductsResponse> {
  const response = await customFetch<ProductsResponse>("/products");

  return { ...response.data };
};

export default Products;
