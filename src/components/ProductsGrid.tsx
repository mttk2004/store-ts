/**
 *  Project: store-ts
 *  File: ProductsGrid.tsx
 *  Created: 8:58 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link, useLoaderData } from "react-router-dom";
import { Product, ProductsResponse } from "@/utils";
import { formatPrice } from "@/utils/helperFunctions.ts";
import { Card, CardContent } from "@/components/ui/card.tsx";

function ProductsGrid() {
  const { data: products } = useLoaderData() as ProductsResponse;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product) => {
        const { title, price, image, company } = product.attributes;
        const dollarAmout: string = formatPrice(price);

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="bg-primary-foreground hover:bg-transparent">
              <CardContent className="space-y-2 overflow-hidden p-0">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full rounded-lg object-cover"
                />
                <div className="px-4 py-2 sm:px-6 md:py-3">
                  <h3 className="font-medium capitalize tracking-wide">
                    {title}
                  </h3>
                  <h4 className="text-sm">{company}</h4>
                  <span className="mt-2 inline-block font-bold">
                    {dollarAmout}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
