/**
 *  Project: store-ts
 *  File: Logo.tsx
 *  Created: 4:48 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link } from "react-router-dom";
import { Armchair } from "lucide-react";

function Logo() {
  return (
    <Link
      to="/"
      className="hidden items-center justify-center rounded-lg bg-primary p-1 text-white md:flex"
    >
      <Armchair className="h-8 w-8" />
    </Link>
  );
}

export default Logo;
