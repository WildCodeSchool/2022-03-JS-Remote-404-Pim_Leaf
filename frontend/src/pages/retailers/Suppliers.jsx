/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import Popup from "reactjs-popup";
import ModalAddSuppliers from "@retailersC/ModalAddSuppliers";
import SearchBarProducts from "@components/SearchBarProducts";
import ToBeConfirmed from "@retailersC/ToBeConfirmed";
import SuppliersTable from "@retailersC/SuppliersTable";
import suppliersData from "@data/MarieData";
import suppliersData2 from "@data/MarieData2";
import plusButton from "@assets/icon_plus.svg";
import RetourButtonWhite from "@assets/retour_button_white.svg";

function Suppliers() {
  const [searchInput, setSearchInput] = useState("");

  const contentStyle = {
    height: "auto",
    overlfow: "scroll", // <-- This tells the modal to scroll
  };

  return (
    <main>
      <div className=" mb-10 mt-20">
        <SearchBarProducts
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <ToBeConfirmed confirmed={suppliersData2} />
      <div className="flex justify-end pr-20">
        <Popup
          trigger={
            <button type="button">
              <img
                src={plusButton}
                alt="plus button"
                className="w-12 m-4 transition duration-120 ease-out hover:scale-110"
              />
            </button>
          }
          modal
          contentStyle={contentStyle}
        >
          {(close) => (
            <div className=" bg-darkBlue opacity-95 text-white">
              {" "}
              <div className="flex pl-5 pr-5">
                <button type="button" onClick={close}>
                  <img
                    src={RetourButtonWhite}
                    alt="Bouton Retour"
                    className="w-25 transition duration-120 ease-out hover:scale-105"
                  />
                </button>
                <h1 className="flex justify-center items-end p-4 text-2xl">
                  Rechercher mon fournisseur
                </h1>
              </div>
              <div className=" mb-10 mt-5">
                <SearchBarProducts
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              </div>
              <div className="flex justify-center overflow-y-scroll h-5/6">
                <ModalAddSuppliers
                  suppliers={suppliersData}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              </div>
            </div>
          )}
        </Popup>
      </div>
      <SuppliersTable
        suppliers={suppliersData}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </main>
  );
}

export default Suppliers;
