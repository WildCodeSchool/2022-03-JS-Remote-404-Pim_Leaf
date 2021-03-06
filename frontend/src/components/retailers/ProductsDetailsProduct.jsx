function ProductsDetailsProduct({ detail, country, region, advise, label }) {
  return (
    <>
      {/* PRODUCT */}
      <div className="my-4">
        <h2 className="text-3xl">Le produit</h2>

        <article className="bg-middleBlue/50 font-redHat flex p-10 shadow-lg my-3">
          <div className="w-2/3">
            <div className="mb-10">
              <h3 className="text-2xl">Ingrédients</h3>
              <p>{detail}</p>
            </div>

            <div>
              <h3 className="text-2xl">
                Conseils d{`'`}utilisation et de préparation
              </h3>
              <p>{advise}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-10">
              <h3 className="text-2xl">Origine</h3>
              <p>{country}</p>
              <p>{region}</p>
            </div>
            <div className="col-span-1 order-4 grid grid-cols-2 pb-10">
              <h3 className="text-2xl col-span-2">Labels</h3>
              <p>{label}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductsDetailsProduct;
