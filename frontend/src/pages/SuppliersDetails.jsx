import { useParams } from "react-router-dom";
import dataSuppliers from "../data/MaxData";

function SuppliersDetails() {
  const { id } = useParams();

  return (
    <main>
      <h1>Details Fournisseur</h1>
      <h2>{dataSuppliers[parseInt(id, 10)].name}</h2>
      <p>{dataSuppliers[parseInt(id, 10)].speciality}</p>
    </main>
  );
}

export default SuppliersDetails;
