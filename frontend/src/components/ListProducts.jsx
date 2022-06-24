import { useState, useEffect } from "react";
import axios from "axios";
import ButtonIcons from "./ButtonIcons";
import TableProducts from "./TableProducts";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const icon = ["plus", "minus"];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.warn(error.response.data);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <div className="ml-12">
        <p>
          Connecté en tant que : <b>Eco Vrac</b>
        </p>
        <p>
          Produits de : <b>Nat-ali</b> et <b>Epice Scop</b>
        </p>
      </div>
      <div className="flex flex-row justify-end">
        {icon.map((i) => (
          <ButtonIcons icon={i} />
        ))}
      </div>
      <div className="font-redHat w-4/5 m-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left h-12">
              <th
                scope="col"
                className="bg-middleBlue/70 text-middleBlue/0 text-l uppercase"
              >
                a
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Produit
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Fabricant
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Catégorie
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Disponibilité
              </th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((product) => (
              <TableProducts key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
