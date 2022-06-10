function ProductsDetailsSupplier() {
  return (
    <>
      {/* SUPPLIER */}
      <article className="border-2 relative m-3 mt-16 bg-white grid grid-cols-3 grid-rows-2 h-max">
        <h2 className="absolute -top-7 left-10 text-2xl bg-white z-10 p-2 border rounded-sm">
          Le Fabricant
        </h2>

        <div className="col-span-1 row-span-2 p-10 flex justify-center align-middle">
          <img
            src="../src/assets/logo_alt.jpg"
            alt=""
            className="object-contain"
          />
        </div>

        <div className="col-span-2 p-10">
          <h2 className="text-3xl pb-2">Moulin d{`'`}ici</h2>
          <div>
            <h3 className="text-2xl">Méthodes de fabrication</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, iusto
              fugiat sed, ratione sequi odit a magnam ipsum in voluptates natus
              alias, vel saepe doloremque? Blanditiis magnam perspiciatis rem
              dolore voluptate magni aperiam veniam rerum placeat sit non in
              minima quisquam, harum iure eveniet et earum excepturi nemo
              soluta. Possimus.
            </p>
          </div>
        </div>

        <div className="col-span-2 p-10 grid grid-cols-2 grid-rows-4">
          <p>Téléphone :</p>
          <a href="tel:+0000000000">+3300000000</a>

          <p>Mail :</p>
          <a href="mailto: aaa@bbb.ccc">MAIL</a>

          <p>Adresse :</p>
          <a href="https://www.openstreetmap.org/#map=16/47.2171/-1.5300">
            GO ON MAP
          </a>

          <p>Site web :</p>
          <a href="#Company">www.COMPANY.com</a>
        </div>
      </article>
    </>
  );
}

export default ProductsDetailsSupplier;
