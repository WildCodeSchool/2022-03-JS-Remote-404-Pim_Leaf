/* eslint-disable import/no-unresolved */
import ListProducts from "@components/ListProducts";
import TitleProducts from "@components/TitleProducts";
import dataProducts from "../data/CalvinData";

function Products() {
  return (
    <main>
      <TitleProducts />
      <ListProducts products={dataProducts.offerProducts} />
    </main>
  );
}

export default Products;
