function ProductsDetailsSupplier({
  company,
  description,
  phone,
  mail,
  address,
  logo,
  postcode,
}) {
  return (
    <div className="flex flex-col mt-20 font-redHat w-3/4 m-auto">
      <h2 className="text-2xl">Le Fabricant</h2>
      {/* SUPPLIER */}
      <article className="bg-middleBlue/50 shadow-lg mt-2">
        <div className="flex flex-row">
          <div className="flex items-center">
            <div className="col-span-1 row-span-2 p-10 flex justify-center">
              <img src={logo.url} alt={logo.alt} className="object-contain" />
            </div>
          </div>
          <div>
            <div className="col-span-2 p-10">
              <h2 className="text-3xl pb-2">{company}</h2>
              <div>
                <h3 className="text-2xl">Méthodes de fabrication</h3>
                <p>{description}</p>
              </div>
            </div>

            <div className="p-10 grid grid-cols-2 grid-rows-4">
              <p>Téléphone :</p>
              <a href="tel:+0000000000">{phone}</a>

              <p>Mail :</p>
              <a href="mailto: aaa@bbb.ccc">{mail}</a>

              <p>Adresse :</p>
              <a href="https://www.openstreetmap.org/#map=16/47.2171/-1.5300">
                {address}
              </a>

              <p>Code Postale: </p>
              <a href="nothing">{postcode}</a>

              <p>Site web :</p>
              <a href="#Company">www.COMPANY.com</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProductsDetailsSupplier;
