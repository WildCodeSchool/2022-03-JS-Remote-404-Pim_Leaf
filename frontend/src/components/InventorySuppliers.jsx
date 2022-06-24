import { useState } from "react";
import { Link } from "react-router-dom";
import SwitchProducts from "./SwitchProducts";

function InventorySuppliers({ product }) {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <tr className="odd:bg-lightBlue/10 even:bg-middleBlue/30">
      <td className="text-left border-y-8 border-white">
        <input
          className="w-5 h-10 ml-5 accent-lightGreen"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </td>
      <td className="text-left text-l border-y-8 border-white">
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </td>
      <td className="text-left text-l border-y-8 border-white">
        {product.fabricant}
      </td>
      <td className="border-y-8 border-white">
        <td className="flex items-center ">
          {product.disponibility}
          <SwitchProducts />
        </td>
      </td>
    </tr>
  );
}

export default InventorySuppliers;
