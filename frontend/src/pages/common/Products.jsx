/* eslint-disable import/no-unresolved */
import ListProducts from "@retailersC/ListProducts";
import ProductsTable from "@suppliersC/ProductsTable";
import { useContext } from "react";

import UserExport from "@contexts/UserContext";

function Products() {
  const { user } = useContext(UserExport.UserContext);
  return (
    <main>
      <div className="flex justify-center text-3xl font-bold font-barlow mt-20">
        <h1>Mes fiches produits</h1>
      </div>

      {user.company_group_id === 1 ? <ListProducts /> : <ProductsTable />}
    </main>
  );
}

export default Products;
