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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product) => {
        const { title, price, image } = product.attributes;
        const dollarAmout: string = formatPrice(price);

        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="bg-primary-foreground">
              <CardContent className="space-y-2 overflow-hidden p-0">
                <img
                  src={image}
                  alt={title}
                  className="h-48 w-full rounded-lg object-cover"
                />
                <div className="px-4 py-2 sm:px-6 md:py-3">
                  <h3 className="capitalize tracking-wide">{title}</h3>
                  <p className="text-sm font-bold tracking-widest">
                    {dollarAmout}
                  </p>
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
