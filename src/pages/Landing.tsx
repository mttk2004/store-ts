/**
 *  Project: store-ts
 *  File: Landing.tsx
 *  Created: 12:17 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { FeaturedProducts, Hero } from "@/components";
import { customFetch, ProductsResponse } from "@/utils";
import { useLoaderData } from "react-router-dom";

function Landing() {
  const data = useLoaderData() as ProductsResponse;
  console.log(data);

  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export const loader = async function (): Promise<ProductsResponse> {
  const response = await customFetch<ProductsResponse>(
    "/products?featured=true",
  );

  return { ...response.data };
};

export default Landing;
