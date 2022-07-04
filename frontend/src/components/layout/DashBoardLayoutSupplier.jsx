/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";

import Nav from "@components/Nav";

function DashboardLayoutSupplier() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
export default DashboardLayoutSupplier;
