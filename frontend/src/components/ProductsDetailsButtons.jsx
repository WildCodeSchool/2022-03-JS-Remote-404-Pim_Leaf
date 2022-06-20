import { Link } from "react-router-dom";
import IconEdit from "../assets/icon_edit.svg";
import IconDownload from "../assets/icon_download.svg";
import IconRotate from "../assets/icon_arrows_rotate.svg";

function ProductsDetailsButtons() {
  return (
    <aside className="flex flex-row justify-end items-center lg:mr-60 md:mr-20">
      <Link to="#Company">
        <img
          src={IconRotate}
          alt="icon actualiser"
          className="w-8 mr-4 transition duration-120 ease-out hover:scale-110"
        />
      </Link>
      <Link to="#Company">
        <img
          src={IconDownload}
          alt="icon télécharger"
          className="w-16 transition duration-120 ease-out hover:scale-110"
        />
      </Link>
      <Link to="#Company">
        <img
          src={IconEdit}
          alt="icon modifier"
          className="w-16 transition duration-120 ease-out hover:scale-110"
        />
      </Link>
    </aside>
  );
}

export default ProductsDetailsButtons;
