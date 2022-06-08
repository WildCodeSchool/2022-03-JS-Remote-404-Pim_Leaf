import React from "react";
import SwitchButtonProducts from "./SwitchButtonProducts";

function TableProducts({ product }) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <tr className="odd:bg-lightBlue/10 even:bg-middleBlue/30">
      <td className="text-left">
        <input
          className="w-5 h-10 ml-5 accent-lightGreen"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </td>
      <td className="text-left text-l">{product.product}</td>
      <td className="text-left text-l">{product.fabricant}</td>
      <td className="text-left text-l">{product.category}</td>
      <td className="items-center">
        {product.disponiblity}
        <SwitchButtonProducts />
      </td>
    </tr>
  );
}

export default TableProducts;
