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
    <Button asChild variant="outline" size="icon" className="rounded-xl">
      <Link to="/cart" className="relative flex items-center justify-center">
        <ShoppingCart />
        <span className="absolute right-0 top-0 inline-flex -translate-y-1/2 translate-x-1/2 transform items-center justify-center rounded-full bg-primary px-2 py-1 text-xs font-bold leading-none text-white">
          {numCartItems}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;
