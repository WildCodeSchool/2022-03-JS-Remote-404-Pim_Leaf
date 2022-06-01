import React from "react";

function ModalSuppliers({ closeModalSuppliers }) {
  return (
    // ModalSuppliersBackground
    <div className="">
      {/* ModalSuppliersContainer */}
      <div className="">
        <div className=" ">
          <button
            onClick={() => closeModalSuppliers(false)}
            type="button"
            className=""
          >
            &times;
          </button>
        </div>
        {/* ModalSuppliersHeader */}
        <div className="">
          <h3>Moulin d ici</h3>
        </div>
        {/* ModalSuppliersBody */}
        <div className="">
          <p>Farine T65</p>
        </div>
        {/* ModalSuppliersFooter */}
        <div className="">
          <button
            onClick={() => closeModalSuppliers(false)}
            type="button"
            className=""
          >
            Farines
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalSuppliers;
