import React from "react";
import DownloadButton from "./DownloadButton";
import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import TableProducts from "./TableProducts";

function ListProducts({ products }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end">
        <PlusButton />
        <MinusButton />
        <DownloadButton />
      </div>
      <div className="font-redHat w-4/5 m-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left h-12">
              <th
                scope="col"
                className="bg-middleBlue/70 text-middleBlue/0 text-l uppercase"
              >
                a
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Produit
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Fabricant
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Catégorie
              </th>
              <th scope="col" className="bg-middleBlue/70 text-l uppercase">
                Disponibilité
              </th>
            </tr>
          </thead>
          <tbody className="">
            {/* //   map the dataProducts for each product */}
            {products.map((product) => (
              <TableProducts key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListProducts;
