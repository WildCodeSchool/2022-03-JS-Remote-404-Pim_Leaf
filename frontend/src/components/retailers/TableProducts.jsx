/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";
import SwitchProducts from "@components/SwitchProducts";

function TableProducts({ product, MdDone, handleCheckProducts }) {
  return (
    <tr className="odd:bg-lightBlue/10 even:bg-middleBlue/30 transition duration-1000 ease-out hover:scale-105">
      <td className="text-left border-y-8 border-white">
        <div
          className={
            product.check
              ? "p-1 pl-3 pr-3 text-lightGreen"
              : "p-1 pl-3 pr-3 text-darkBlue"
          }
        >
          <MdDone onClick={() => handleCheckProducts(product)} />
        </div>
      </td>
      <td className="text-left text-l border-y-8 border-white">
        <Link to={`/products/${product.product_ID}`}>
          {product.product_name}
        </Link>
      </td>
      <td className="text-left text-l border-y-8 border-white">
        {product.supplier}
      </td>
      <td className="text-left text-l border-y-8 border-white">
        {product.category}
      </td>
      <td className="text-left text-l border-y-8 border-white">
        <div className="flex items-center ">
          {product.quantity > 0 ? (
            <SwitchProducts disponibility />
          ) : (
            <SwitchProducts disponibility={false} />
          )}
        </div>
      </td>
    </tr>
  );
}

export default TableProducts;
