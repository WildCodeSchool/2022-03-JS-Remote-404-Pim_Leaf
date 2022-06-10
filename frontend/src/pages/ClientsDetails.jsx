import { useParams } from "react-router-dom";
import dataSet from "../data/DataProducts";

function ClientsDetails() {
  const { id } = useParams();

  return (
    <main>
      <h1>{dataSet[parseInt(id, 10)].name}</h1>
    </main>
  );
}

export default ClientsDetails;
