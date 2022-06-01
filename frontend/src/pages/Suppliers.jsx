import { Link } from "react-router-dom";

import dataSuppliers from "../data/MaxData";

function Suppliers() {
  return (
    <main>
      <h1>Suppliers</h1>
      {dataSuppliers.map((supplier) => (
        <Link to={`/suppliers/${supplier.id}`} key={supplier.id}>
          {supplier.name}
        </Link>
      ))}
    </main>
  );
}

export default Suppliers;
