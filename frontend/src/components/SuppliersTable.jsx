/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import SuppliersList from "./SuppliersList";

function SuppliersTable({ suppliers }) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl leading-tight">Mes Fournisseurs</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-lightGrey/100 bg-lightGrey/60 text-left text-xs font-semibold text-darkBlue/60 uppercase tracking-wider">
                    Fournisseur / Nom
                  </th>
                  <th className="px-5 py-3 border-b-2 border-lightGrey/100 bg-lightGrey/60 text-left text-xs font-semibold text-darkBlue/60 uppercase tracking-wider">
                    Domaine
                  </th>
                  <th className="px-5 py-3 border-b-2 border-lightGrey/100 bg-lightGrey/60 text-left text-xs font-semibold text-darkBlue/60 uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="px-5 py-3 border-b-2 border-lightGrey/100 bg-lightGrey/60 text-left text-xs font-semibold text-darkBlue/60 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 border-lightGrey/100 bg-lightGrey/60" />
                </tr>
              </thead>
              <tbody>
                {suppliers.map(({ id, name, domaine, ville, status }) => (
                  <SuppliersList
                    id={id}
                    name={name}
                    domaine={domaine}
                    ville={ville}
                    status={status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuppliersTable;
