/* eslint-disable import/no-unresolved */
import ListProducts from "@components/ListProducts";
import TitleProducts from "@components/TitleProducts";
import SearchBarProducts from "../components/SearchBarProducts";

function Products() {
  return (
    <main>
      <SearchBarProducts />
      <TitleProducts />
      <ListProducts />
    </main>
  );
}

export default Products;
