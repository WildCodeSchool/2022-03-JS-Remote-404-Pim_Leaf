/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import Products from "@pages/Products";
import Suppliers from "@pages/Suppliers";
import Clients from "@pages/Clients";
import Company from "@pages/Company";
import Profil from "@pages/Profil";
import SuppliersDetails from "@pages/SuppliersDetails";
import CompanyDetails from "@pages/CompanyDetails";
import ProductsDetails from "@pages/ProductsDetails";
import ClientsDetails from "@pages/ClientsDetails";

import UserExport from "./contexts/UserContext";

import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <UserExport.ContextProvider>
      <BrowserRouter>
        <div className="h-screen bg-center bg-cover">
          {window.location.pathname === "/" ||
          window.location.pathname === "" ? null : (
            <Nav />
          )}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsDetails />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/suppliers/:id" element={<SuppliersDetails />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients/:id" element={<ClientsDetails />} />
            <Route path="/company" element={<Company />} />
            <Route path="/company/:id" element={<CompanyDetails />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserExport.ContextProvider>
  );
}

export default App;
