/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */

import SuppliersListModal from "@retailersC/SuppliersListModal";

function ModalAddSuppliers({ suppliers, searchInput }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" className="bg-middleBlue/70  text-l uppercase">
              Nom
            </th>
            <th scope="col" className="bg-middleBlue/70 text-l uppercase">
              Cathégorie
            </th>
            <th scope="col" className="bg-middleBlue/70" />
          </tr>
        </thead>
        <tbody>
          {suppliers
            .filter(
              (supplier) =>
                supplier.name.includes(searchInput) ||
                supplier.domaine.includes(searchInput)
            )
            .map(({ id, name, domaine }) => (
              <SuppliersListModal id={id} name={name} domaine={domaine} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModalAddSuppliers;
