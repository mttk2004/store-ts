/**
 *  Project: store-ts
 *  File: Products.tsx
 *  Created: 12:18 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { customFetch, ProductsResponse } from "@/utils";
import { Filters, PaginationContainer, ProductsContainer } from "@/components";

function Products() {
  return (
    <div className="space-y-4 py-2 sm:py-4 md:py-6 lg:py-8">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}

export const loader = async function ({
  request,
}: {
  request: Request;
}): Promise<ProductsResponse> {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>("/products", { params });

  return { ...response.data };
};

export default Products;
