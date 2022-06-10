import { useParams } from "react-router-dom";

import ProductsDetailsProduct from "@components/ProductsDetailsProduct";
import ProductsDetailsRetailer from "@components/ProductsDetailsRetailer";
import ProductsDetailsSupplier from "@components/ProductsDetailsSupplier";

import dataProducts from "../data/DataProducts";

function ProductsDetails() {
  const { id } = useParams();
  const DT = dataProducts[parseInt(id - 1, 10)];

  return (
    <main>
      <article className="flex justify-center pt-16">
        <h1 className="text-4xl">{DT.name}</h1>
      </article>

      <section className="grid grid-cols-4">
        <div className="col-span-3 grid grid-rows-3 gap-1">
          <ProductsDetailsProduct ingredients={DT.ingredients} />

          <ProductsDetailsSupplier />

          <ProductsDetailsRetailer />
        </div>

        <aside className="col-span-1 border-2 m-8 mt-16 p-2 h-28 grid grid-cols-4 bg-white">
          <img src="../src/assets/icon_pencil.svg" alt="" className="w-6" />

          <a href="#Company" className="col-span-3">
            Éditer
          </a>

          <img
            src="../src/assets/icon_download_cloud.svg"
            alt=""
            className="w-6"
          />

          <a href="#Company" className="col-span-3">
            Télécharger
          </a>

          <img
            src="../src/assets/icon_arrows_rotate.svg"
            alt=""
            className="w-6"
          />

          <a href="#Company" className="col-span-3">
            Actualiser
          </a>
        </aside>
      </section>
    </main>
  );
}

export default ProductsDetails;
