/**
 *  Project: store-ts
 *  File: HomeLayout.tsx
 *  Created: 12:17 CH, 06/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { Outlet } from "react-router-dom";


function HomeLayout() {
  return <div>
    <Outlet/>
  </div>;
}

export default HomeLayout;
