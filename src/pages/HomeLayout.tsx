/**
 *  Project: store-ts
 *  File: HomeLayout.tsx
 *  Created: 12:17 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Footer } from "../components";
import { Loader } from "@/components";

function HomeLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <Navbar />
      <main className="align-element py-8 sm:py-10 md:py-12 lg:py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
