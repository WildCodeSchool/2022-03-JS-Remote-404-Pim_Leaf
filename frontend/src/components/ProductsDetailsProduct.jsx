function ProductsDetailsProduct({ detail, origin, advise, label }) {
  return (
    <>
      {/* PRODUCT */}
      <div className="flex flex-col font-redHat w-3/4 m-auto">
        <div>
          <h2 className="text-2xl">Le produit</h2>
        </div>
        <article className="bg-middleBlue/50 font-redHat flex justify-between p-10 shadow-lg mt-2">
          <div className="flex flex-col">
            <div className="mt-4 mb-10">
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
            <div className="mt-4 mb-10">
              <h3 className="text-2xl">Origine</h3>
              <p>{origin.country}</p>
              <p>{origin.region}</p>
            </div>
            <div className="col-span-1 order-4 grid grid-cols-2 pb-10">
              <h3 className="text-2xl col-span-2">Labels</h3>
              <img src={label.file.url} alt={label.file.alt} />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductsDetailsProduct;
