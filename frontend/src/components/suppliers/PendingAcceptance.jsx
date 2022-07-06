/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import PendingAcceptanceList from "./PendingAcceptanceList";

function PendingAcceptance({ confirmed }) {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-redHat leading-tight">
            En attente de confirmation
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="font-redHat px-5 py-3 border-b-2 border-middleBlue/100 bg-middleBlue/60 text-left text-xs font-semibold text-darkBlue uppercase tracking-wider">
                    Client / Nom
                  </th>
                  <th className="font-redHat px-5 py-3 border-b-2 border-middleBlue/100 bg-middleBlue/60 text-left text-xs font-semibold text-darkBlue uppercase tracking-wider">
                    Domaine
                  </th>
                  <th className="font-redHat px-5 py-3 border-b-2 border-middleBlue/100 bg-middleBlue/60 text-left text-xs font-semibold text-darkBlue uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="font-redHat px-5 py-3 border-b-2 border-middleBlue/100 bg-middleBlue/60 text-left text-xs font-semibold text-darkBlue uppercase tracking-wider" />
                  <th className="font-redHat px-5 py-3 border-b-2 border-middleBlue/100 bg-middleBlue/60 text-left text-xs font-semibold text-darkBlue uppercase tracking-wider" />
                  <th className="font-redHat px-5 py-3 border-b-2 border-gray-200 bg-gray-100 border-middleBlue/100 bg-middleBlue/60" />
                </tr>
              </thead>
              <tbody>
                {confirmed.map(
                  ({ id, name, domaine, ville, choix1, choix2 }) => (
                    <PendingAcceptanceList
                      id={id}
                      name={name}
                      domaine={domaine}
                      ville={ville}
                      choix1={choix1}
                      choix2={choix2}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PendingAcceptance;
