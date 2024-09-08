/**
 *  Project: store-ts
 *  File: ProductsContainer.tsx
 *  Created: 6:09 CH, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { useLoaderData } from "react-router-dom";
import { ProductsResponse } from "@/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { LayoutGrid, List } from "lucide-react";
import { Separator } from "@/components/ui/separator.tsx";
import { ProductsGrid, ProductsList } from "@/components/index.ts";

function ProductsContainer() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { meta } = useLoaderData() as ProductsResponse;

  const numProducts: number = meta.pagination.total;

  return (
    <>
      {/*HEADER*/}
      <header className="flex items-center justify-between">
        <span className="font-medium uppercase">
          {numProducts} product{numProducts > 1 && "s"}
        </span>

        <span className="flex justify-items-center gap-x-3">
          <Button
            asChild
            size="icon"
            variant={layout === "grid" ? "default" : "ghost"}
            onClick={() => setLayout("grid")}
            className="p-1"
          >
            <LayoutGrid className="h-7 w-7" />
          </Button>
          <Button
            asChild
            size="icon"
            variant={layout === "list" ? "default" : "ghost"}
            onClick={() => setLayout("list")}
            className="p-1"
          >
            <List className="h-7 w-7" />
          </Button>
        </span>
      </header>

      <Separator className="my-4" />

      {/*PRODUCTS*/}
      <div>
        {numProducts === 0 ? (
          <h3>Sorry, no products matched your search...</h3>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
