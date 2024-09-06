/**
 *  Project: store-ts
 *  File: NavLinks.tsx
 *  Created: 4:50 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="hidden items-center justify-center gap-x-4 md:flex lg:gap-x-6">
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.label}
          className={({ isActive }) =>
            `hover:text-primary ${isActive ? "text-primary" : ""}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
