/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import axios from "axios";
import DownloadButton from "./DownloadButton";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import TableProducts from "./TableProducts";

function ListProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.warn(error.response.data);
      });
  }, []);

  return (
    <div className="flex flex-col">
      <p className="ml-12">
        Connecté en tant que : <b>Eco Vrac</b>
        <p>
          Produits de : <b>Nat-ali</b> et <b>Epice Scop</b>
        </p>
      </p>
      <div className="flex flex-row justify-end">
        <PlusButton />
        <MinusButton />
        <DownloadButton />
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
            {/* //   map the dataProducts for each product */}
            {products.map((product, index) => (
              <TableProducts key={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
