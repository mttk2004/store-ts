/**
 *  Project: store-ts
 *  File: Navbar.tsx
 *  Created: 4:40 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import {
  CartButton,
  LinksDropdown,
  Logo,
  ModeToggle,
  NavLinks,
} from "@/components/index.ts";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="align-element flex items-center justify-between bg-primary-foreground py-1.5 sm:py-2 md:py-2.5">
      <Logo />
      <LinksDropdown />
      <NavLinks />

      <Link to="/" className="flex justify-items-center gap-x-1 md:hidden">
        <img src="bird.svg" alt="Logo" className="h-7 w-7" />
        <span className="inline-flex justify-items-center font-bold uppercase leading-8 text-primary">
          Store TS
        </span>
      </Link>

      <span className="inline-flex items-center justify-center gap-x-1 sm:gap-x-2">
        <ModeToggle />
        <CartButton />
      </span>
    </nav>
  );
}

export default Navbar;
