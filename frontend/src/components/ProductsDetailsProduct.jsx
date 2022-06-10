function ProductsDetailsProduct({ ingredients }) {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            dolorum totam repudiandae odio velit ab autem consequatur veritatis
            provident dolores quis fugit, et aliquam corrupti quae aperiam
            possimus quia similique cumque atque soluta rem nesciunt. Architecto
            obcaecati nam ipsa ipsum earum. Dolor, totam exercitationem non
            asperiores similique ab error rem?
          </p>
        </div>

        <div className="col-span-1 order-2 p-10">
          <h3 className="text-2xl">Origine</h3>
          <p>LABAS</p>
        </div>

        <div className="col-span-1 order-4 grid grid-cols-2 p-10">
          <h3 className="text-2xl col-span-2">Labels</h3>

          <div className="w-9/12">
            <img src="../src/assets/label_ab.jpg" alt="label AB" />
          </div>

          <div className="w-9/12">
            <img src="../src/assets/label_alsace_gold.jpg" alt="label Alsace" />
          </div>

          <div className="w-9/12">
            <img src="../src/assets/label_spp.png" alt="label SPP" />
          </div>

          <div className="w-9/12">
            <img src="../src/assets/label_euro.jpg" alt="label Euro" />
          </div>
        </div>
      </article>
    </>
  );
}

export default ProductsDetailsProduct;
