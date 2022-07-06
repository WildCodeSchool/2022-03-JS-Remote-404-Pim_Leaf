/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import UserExport from "@contexts/UserContext";

import Logo from "@assets/logo_text.png";
import Logout from "@assets/icon_logout.svg";
import OpenBurger from "@assets/burger_icon.png";
import CloseBurger from "@assets/burger_close_icon.png";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const { user, setUser } = useContext(UserExport.UserContext);

  const navigate = useNavigate();
  const handleLogout = () => {
    setUser();
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between">
      <Link
        to={
          user.company_group_id === 1
            ? "/commercant/produits"
            : "/fournisseur/produits"
        }
        className="ml-10 w-40"
      >
        <img src={Logo} alt="logo" className="w-full h-auto item-centers" />
      </Link>

      <img
        src={navOpen ? CloseBurger : OpenBurger}
        alt=""
        className="h-5 z-20 absolute right-9 top-10 cursor-pointer lg:hidden"
        onClick={() => setNavOpen(!navOpen)}
      />

      <ul
        className={`bg-white lg:text-right w-full h-full duration-500 ease-linear lg:pl-10 lg:static fixed  top-0 lg:h-auto z-10 ${
          !navOpen ? "right-[-100%]" : "right-0"
        } `}
      >
        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to={
              user.company_group_id === 1
                ? "/commercant/produits"
                : "/fournisseur/produits"
            }
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">01</span>
            MES PRODUITS
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          {user.company_group_id === 1 ? (
            <Link
              to="/commercant/fournisseurs"
              className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1.5">02</span>
              MES FOURNISSEURS
            </Link>
          ) : (
            <Link
              to="/fournisseur/clients"
              className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
              onClick={() => setNavOpen(!navOpen)}
            >
              <span className="font-bold mr-1.5">02</span>
              MES CLIENTS
            </Link>
          )}
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to={user.company_group_id === 1 ? "/entreprise" : "/entreprise"}
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">03</span>
            MON ENTREPRISE
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
          <Link
            to={user.company_group_id === 1 ? "/profil" : "/profil"}
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="font-bold mr-1.5">04</span>
            MON PROFIL
          </Link>
        </li>

        <li className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6">
          <Link
            to="/"
            className="text-#14252F cursor-pointer font-Barlow font-normal text-sm inline-block lg:py-5 py-3"
            onClick={handleLogout}
          >
            <div className="">
              <button
                type="button"
                className="lg:inline-block  lg:ml-10 ml-5 lg:my-0 my-6 hover:border-white duration-300"
              >
                <img
                  src={Logout}
                  alt=""
                  className="h-12 mr-14 inline-block py-3"
                />
              </button>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
