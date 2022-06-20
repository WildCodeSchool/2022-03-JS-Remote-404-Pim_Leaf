function ProductsDetailsRetailer({ advise, recipeIdea }) {
  return (
    <div className="flex flex-col mt-20 font-redHat w-3/4 m-auto ">
      <h2 className="text-2xl">Mon commerce</h2>
      {/* COMPANY */}
      <article className="bg-middleBlue/50 mb-10 flex justify-between">
        <div className="p-10">
          <h3 className="text-2xl pb-2">Astuces</h3>
          <p>{advise}</p>
        </div>

        <div className="p-10">
          <h3 className="text-2xl pb-2">Idées recettes</h3>
          <p>{recipeIdea}</p>
        </div>
      </article>
    </div>
  );
}

export default ProductsDetailsRetailer;
