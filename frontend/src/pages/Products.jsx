/* eslint-disable import/no-unresolved */
import ListProducts from "@components/ListProducts";
import TitleProducts from "@components/TitleProducts";
import dataProducts from "../data/DataProducts";
import SearchBarProducts from "../components/SearchBarProducts";

function Products() {
  return (
    <main>
      <SearchBarProducts />
      <TitleProducts />
      <ListProducts products={dataProducts} />
    </main>
  );
}

export default Products;
