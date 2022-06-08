/* eslint-disable import/no-unresolved */
import ListProducts from "@components/ListProducts";
import TitleProducts from "@components/TitleProducts";
import dataProducts from "../data/DataProducts";

function Products() {
  return (
    <main>
      <TitleProducts />
      <ListProducts products={dataProducts} />
    </main>
  );
}

export default Products;
