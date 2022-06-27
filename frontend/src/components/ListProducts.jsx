/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
import { useState, useEffect } from "react";
import { MdDone } from "react-icons/md";
import axios from "axios";
import ButtonIcons from "./ButtonIcons";
import TableProducts from "./TableProducts";
import SearchBarProducts from "./SearchBarProducts";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const icon = ["plus", "minus"];

  const handleCheckProducts = (prod) => {
    const newProduct = [...products];
    const index = newProduct.indexOf(prod);
    newProduct[index].check = !newProduct[index].check;
    setProducts(newProduct);
  };

  const handleClickMinus = (prod) => {
    const productToGet = [];
    const productToDelete = [];
    for (let i = 0; i < prod.length; i++) {
      prod[i].check
        ? productToDelete.push(prod[i])
        : productToGet.push(prod[i]);
    }
    setProducts(productToGet);
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
        <SearchBarProducts
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div className="font-redHat w-4/5 m-auto">
        <div className="flex flex-row justify-end">
          {icon.map((i) => (
            <ButtonIcons
              icon={i}
              handleClickMinus={handleClickMinus}
              products={products}
            />
          ))}
        </div>
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
                Fournisseur
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Catégorie
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Disponibilité
              </th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter(
                (product) =>
                  product.product_name.includes(searchInput) ||
                  product.supplier.includes(searchInput) ||
                  product.category.includes(searchInput)
              )
              .map((product) => (
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
