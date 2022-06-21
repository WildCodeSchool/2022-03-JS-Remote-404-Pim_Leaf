function ProductsDetailsProduct({ ingredients, origin, advise, label }) {
  return (
    <>
      {/* PRODUCT */}
      <div className="flex flex-col font-redHat w-3/4 m-auto">
        <div>
          <h2 className="text-2xl">Le produit</h2>
        </div>
        <article className="bg-middleBlue/50 font-redHat flex justify-between p-10">
          <div className="flex flex-col">
            <div className="mt-4 mb-10">
              <h3 className="text-2xl">Ingrédients</h3>
              <p>
                {ingredients.map((p) => (
                  <p> {p} </p>
                ))}
              </p>
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
              <p>{origin}</p>
            </div>
            <div className="col-span-1 order-4 grid grid-cols-2 pb-10">
              <h3 className="text-2xl col-span-2">Labels</h3>

              {label.map((i) => (
                <div>
                  <img
                    src={i.src}
                    alt={i.alt}
                    style={{ width: "70px", height: "70px" }}
                    className="object-cover mx-2 my-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductsDetailsProduct;
