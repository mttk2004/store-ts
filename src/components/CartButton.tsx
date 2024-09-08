/**
 *  Project: store-ts
 *  File: CartButton.tsx
 *  Created: 4:50 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function CartButton() {
  const numCartItems = 5;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="h-9 w-9 rounded-xl p-2"
    >
      <Link to="/cart" className="relative flex items-center justify-center">
        <ShoppingCart />
        <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-primary px-1 py-0.5 text-xs font-bold leading-none text-white sm:px-2 sm:py-1">
          {numCartItems}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
