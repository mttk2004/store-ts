/**
 *  Project: store-ts
 *  File: ProductsList.tsx
 *  Created: 6:12 CH, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link, useLoaderData } from "react-router-dom";
import { ProductsResponse } from "@/utils";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { formatPrice } from "@/utils/helperFunctions.ts";

function ProductsList() {
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    <div className="grid gap-y-4 md:px-16 lg:px-32 xl:px-48">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);

        return (
          <Link key={product.id} to={`/products/${product.id}`}>
            <Card className="bg-primary-foreground hover:bg-transparent">
              <CardContent className="grid grid-cols-1 overflow-hidden p-0 sm:grid-cols-3">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full rounded-lg object-cover sm:h-36 sm:w-full sm:max-w-64"
                />
                <div className="flex flex-col items-start justify-start px-6 py-4 sm:col-span-2">
                  <h2 className="font-medium capitalize tracking-wide">
                    {title}
                  </h2>
                  <h4 className="text-sm">{company}</h4>
                  <span className="mt-auto font-bold">{dollarsAmount}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsList;
