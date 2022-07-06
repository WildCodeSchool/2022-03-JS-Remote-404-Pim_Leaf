/* eslint-disable import/no-unresolved */

import { Outlet } from "react-router-dom";

import React from "react";
import Nav from "@components/common/Nav";

function DashboardLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
export default DashboardLayout;
