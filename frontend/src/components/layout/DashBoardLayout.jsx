import { Outlet } from "react-router-dom";

import React from "react";
import Nav from "@components/Nav";

function DashboardLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
export default DashboardLayout;
