/* eslint-disable import/no-unresolved */
import { useParams } from "react-router-dom";

import ProductsDetailsButtons from "@components/ProductsDetailsButtons";
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
        <h1 className="flex justify-center text-3xl font-bold font-barlow">
          {DT.name}
        </h1>
      </article>
      <ProductsDetailsButtons />
      <section>
        <div>
          <ProductsDetailsProduct
            ingredients={DT.ingredients}
            origin={DT.origin}
            advise={DT.advise}
            label={DT.label}
          />

          <ProductsDetailsSupplier />

          <ProductsDetailsRetailer
            advise={DT.advise}
            recipeIdea={DT.recipeIdea}
          />
        </div>
      </section>
    </main>
  );
}

export default ProductsDetails;
