import { useState, useEffect } from "react";
import { MdDone } from "react-icons/md";
import axios from "axios";
import DownloadButton from "./DownloadButton";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import TableProducts from "./TableProducts";

function ListProducts() {
  const [products, setProducts] = useState([]);

  const handleCheckProducts = (prod) => {
    const newProduct = [...products];
    const index = newProduct.indexOf(prod);
    newProduct[index].check = !newProduct[index].check;
    setProducts(newProduct);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}products`)
      .then((res) => {
        const prod = res.data.map((el) => ({ ...el, check: false }));
        setProducts(prod);
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
        <PlusButton />
        <MinusButton />
        <DownloadButton />
      </div>
      <div className="font-redHat w-4/5 m-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left h-12 shadow-md">
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
            {products.map((product) => (
              <TableProducts
                key={product.id}
                product={product}
                MdDone={MdDone}
                handleCheckProducts={handleCheckProducts}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
