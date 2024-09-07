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

function Navbar() {
  return (
    <nav className="align-element flex items-center justify-between bg-primary-foreground py-3">
      <Logo />
      <LinksDropdown />
      <NavLinks />
      <span className="inline-flex items-center justify-center gap-x-4">
        <ModeToggle />
        <CartButton />
      </span>
    </nav>
  );
}

export default Navbar;
