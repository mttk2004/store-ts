/**
 *  Project: store-ts
 *  File: Footer.tsx
 *  Created: 8:36 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

function Footer() {
  return (
    <footer className="mt-auto border-t border-muted-foreground bg-tertiary py-3 text-center text-xs sm:py-4 md:py-5 md:text-sm">
      <p>&copy; {new Date().getFullYear()} Store-TS. All rights reserved.</p>
      <p>
        Developed by{" "}
        <a
          href="https://github.com/mttk2004"
          target="_blank"
          className="hover:text-primary"
        >
          Mai Tran Tuan Kiet
        </a>
      </p>
    </footer>
  );
}

export default Footer;
