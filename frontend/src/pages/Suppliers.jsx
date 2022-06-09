import React from "react";
import SearchBarSuppliers from "../components/SearchBarSuppliers";
import ToBeConfirmed from "../components/ToBeConfirmed";
import SuppliersTable from "../components/SuppliersTable";
import suppliersData from "../data/MarieData";
import suppliersData2 from "../data/MarieData2";

function Suppliers() {
  return (
    <main>
      <SearchBarSuppliers />
      <ToBeConfirmed confirmed={suppliersData2} />
      <SuppliersTable suppliers={suppliersData} />
    </main>
  );
}

export default Suppliers;
