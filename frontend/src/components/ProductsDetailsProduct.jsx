function ProductsDetailsProduct({ ingredients, origin, advise, label }) {
  return (
    <>
      {/* PRODUCT */}
      <article className="grid-span-2 border-2 relative m-3 mt-16 bg-white grid grid-cols-3 grid-rows-2 gap-1 h-max">
        <h2 className="absolute -top-7 left-10 text-2xl bg-white p-2 border rounded-sm">
          Le Produit
        </h2>

        <div className="col-span-2 order-1 p-10">
          <h3 className="text-2xl">Ingrédients</h3>
          <p>
            {ingredients.map((p) => (
              <p> {p} </p>
            ))}
          </p>
        </div>

        <div className="col-span-2 order-3 p-10">
          <h3 className="text-2xl">
            Conseils d{`'`}utilisation et de préparation
          </h3>
          <p>{advise}</p>
        </div>

        <div className="col-span-1 order-2 p-10">
          <h3 className="text-2xl">Origine</h3>
          <p>{origin}</p>
        </div>

        <div className="col-span-1 order-4 grid grid-cols-2 p-10">
          <h3 className="text-2xl col-span-2">Labels</h3>

          {label.map((i) => (
            <div className="w-9/12">
              <img src={i.src} alt={i.alt} />
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default ProductsDetailsProduct;
