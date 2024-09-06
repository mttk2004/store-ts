/**
 *  Project: store-ts
 *  File: LinksDropdown.tsx
 *  Created: 4:49 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { AlignLeft } from "lucide-react";
import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon" className="rounded-xl">
          <AlignLeft />
          <span className="sr-only"> Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-48 md:hidden"
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `w-full capitalize ${isActive ? "text-primary" : ""}`
              }
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
