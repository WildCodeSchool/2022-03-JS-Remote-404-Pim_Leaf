/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between">
      <img
        src="./src/assets/logo1.png"
        alt="logo"
        className="h-24 ml-7 mb-5 item-centers"
      />
      <img
        src={
          navOpen
            ? "./src/assets/burger_close_icon.png"
            : "./src/assets/burger_icon.png"
        }
        alt=""
        className="h-5 z-20 fixed right-9 top-10 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      />
      <ul
        className={`bg-white lg:text-right w-full h-full duration-500 ease-linear lg:pl-10 lg:static fixed  top-0 lg:h-auto z-10 ${
          !navOpen ? "right-[-100%]" : "right-0"
        } `}
      >
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/products"
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">01</span>
            MES PRODUITS
          </Link>
        </li>
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/suppliers"
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">02</span>
            MES FOURNISSEURS
          </Link>
        </li>
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/company"
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">03</span>
            MON ENTREPRISE
          </Link>
        </li>
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to="/profil"
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">04</span>
            MON PROFIL
          </Link>
        </li>
        <button
          type="button"
          className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 hover:border-white duration-300"
        >
          <img
            src="./src/assets/logout_icon.png"
            alt=""
            className="h-12 mr-14 inline-block py-3"
          />
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
