/* eslint-disable import/no-unresolved */
import SearchBarProducts from "@components/common/SearchBarProducts";
import { useState } from "react";
import ClientTable from "@components/suppliers/ClientTable";
import suppliersData from "@data/MarieData";
import suppliersData2 from "@data/MarieData2";
import PendingAcceptance from "@components/suppliers/PendingAcceptance";

function SuppliersClients() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main>
      <div className=" mb-10 mt-20">
        <SearchBarProducts
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <PendingAcceptance confirmed={suppliersData2} />
      <ClientTable
        suppliers={suppliersData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </main>
  );
}

export default SuppliersClients;
