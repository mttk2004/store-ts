/**
 *  Project: store-ts
 *  File: Header.tsx
 *  Created: 3:14 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function Header() {
  const [user, setUser] = useState<{ username: string } | null>({
    username: "demo user",
  });

  function handleLogout(): void {
    setUser(null);
  }

  return (
    <header className="bg-tertiary">
      <div className="align-element flex items-center justify-center sm:justify-end">
        {user ? (
          <div className="flex items-center justify-between gap-x-2 text-xs sm:gap-x-4 sm:text-sm">
            <p className="inline-block">Hello, {user.username}!</p>
            <Button
              variant="link"
              size="sm"
              onClick={handleLogout}
              className="text-xs sm:text-sm"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-x-2 sm:gap-x-4">
            <Button
              asChild
              size="sm"
              variant="link"
              className="text-xs sm:text-sm"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="link"
              className="text-xs sm:text-sm"
            >
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
