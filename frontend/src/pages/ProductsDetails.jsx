/* eslint-disable import/no-unresolved */
import { useState } from "react";

import ProductsDetailsProduct from "@components/ProductsDetailsProduct";
import ProductsDetailsRetailer from "@components/ProductsDetailsRetailer";
import ProductsDetailsSupplier from "@components/ProductsDetailsSupplier";

import ButtonIcons from "@components/ButtonIcons";
import RetourButton from "@assets/retour_button.svg";
import { Link } from "react-router-dom";
import dataProducts from "../data/DataProducts";

function ProductsDetails() {
  const [product] = useState(dataProducts);
  const icon = ["edit", "download"];

  return (
    <main>
      <article className="flex justify-center pt-16">
        <h1 className="flex justify-center text-3xl font-bold font-barlow">
          {product[0].product_name}
        </h1>
      </article>
      <div className="flex justify-between">
        <Link to="/products">
          <img
            src={RetourButton}
            alt="bouton retour"
            className="w-36 transition duration-120 ease-out hover:scale-110 ml-36"
          />
        </Link>
        <div className="flex flex-row justify-end items-center lg:mr-36 md:mr-20">
          <div />

          <div className="w-16 transition duration-120 ease-out hover:scale-110">
            {icon.map((i) => (
              <ButtonIcons icon={i} />
            ))}
          </div>
        </div>
      </div>
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
