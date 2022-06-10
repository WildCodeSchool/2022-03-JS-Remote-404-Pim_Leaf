function ProductsDetailsButtons() {
  return (
    <aside className="col-span-1 border-2 m-8 mt-16 p-2 h-28 grid grid-cols-4 bg-white">
      <img src="../src/assets/icon_pencil.svg" alt="" className="w-6" />

      <a href="#Company" className="col-span-3">
        Éditer
      </a>

      <img src="../src/assets/icon_download_cloud.svg" alt="" className="w-6" />

      <a href="#Company" className="col-span-3">
        Télécharger
      </a>

      <img src="../src/assets/icon_arrows_rotate.svg" alt="" className="w-6" />

      <a href="#Company" className="col-span-3">
        Actualiser
      </a>
    </aside>
  );
}

export default ProductsDetailsButtons;
