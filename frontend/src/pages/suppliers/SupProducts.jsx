import ProductsTable from "../../components/suppliers/ProductsTable";
import SearchBarProducts from "../../components/SearchBarProducts";

function SupProducts() {
  return (
    <main>
      <SearchBarProducts />

      <div className="flex justify-center text-3xl font-bold font-barlow mt-20">
        <h1>Mes fiches produits</h1>
      </div>

      <ProductsTable />
    </main>
  );
}

export default SupProducts;
