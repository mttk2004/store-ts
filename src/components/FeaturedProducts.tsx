/**
 *  Project: store-ts
 *  File: FeaturedProducts.tsx
 *  Created: 8:57 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { ProductsGrid, SectionTitle } from "@/components/index.ts";

function FeaturedProducts() {
  return (
    <div className="space-y-6">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </div>
  );
}

export default FeaturedProducts;
