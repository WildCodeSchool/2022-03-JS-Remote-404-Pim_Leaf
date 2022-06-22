/* eslint-disable import/no-unresolved */
import { useState } from "react";

import ProductsDetailsButtons from "@components/ProductsDetailsButtons";
import ProductsDetailsProduct from "@components/ProductsDetailsProduct";
import ProductsDetailsRetailer from "@components/ProductsDetailsRetailer";
import ProductsDetailsSupplier from "@components/ProductsDetailsSupplier";

import dataProducts from "../data/DataProducts";

function ProductsDetails() {
  const [product] = useState(dataProducts);

  return (
    <main>
      <article className="flex justify-center pt-16">
        <h1 className="flex justify-center text-3xl font-bold font-barlow">
          {product[0].product_name}
        </h1>
      </article>
      <ProductsDetailsButtons />
      <section>
        <div>
          <ProductsDetailsProduct
            detail={product[0].detail}
            origin={product[0].origin}
            advise={product[0].advise}
            label={product[0].label}
          />

          <ProductsDetailsSupplier
            company={product[0].company.company_name}
            description={product[0].company.description}
            phone={product[0].company.phone}
            mail={product[0].company.mail}
            address={product[0].company.address}
            logo={product[0].company.file}
            postcode={product[0].company.postcode}
          />

          <ProductsDetailsRetailer
            advise={product[0].advise}
            recipeIdea={product[0].recipe_idea}
          />
        </div>
      </section>
    </main>
  );
}

export default ProductsDetails;
