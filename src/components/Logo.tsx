/**
 *  Project: store-ts
 *  File: Logo.tsx
 *  Created: 4:48 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="hidden justify-items-center gap-x-1 md:flex">
      <img src="bird.svg" alt="Logo" className="h-7 w-7" />
      <span className="inline-flex justify-items-center font-bold uppercase leading-8 text-primary">
        Store TS
      </span>
    </Link>
  );
}

export default Logo;
