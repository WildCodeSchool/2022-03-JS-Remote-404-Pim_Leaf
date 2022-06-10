function ProductsDetailsRetailer({ advise, recipeIdea }) {
  return (
    <>
      {/* COMPANY */}
      <article className="border-2 relative flex justify-between m-3 mt-16 h-max bg-white">
        <h2 className="absolute -top-7 left-10 text-2xl bg-white z-10 p-2 border rounded-sm">
          Mon commerce
        </h2>

        <div className="p-10">
          <h3 className="text-2xl pb-2">Astuces</h3>
          <p>{advise}</p>
        </div>

        <div className="p-10">
          <h3 className="text-2xl pb-2">Idées recettes</h3>
          <p>{recipeIdea}</p>
        </div>
      </article>
    </>
  );
}

export default ProductsDetailsRetailer;
