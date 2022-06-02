/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "@pages/Login";
import Products from "@pages/Products";
import Suppliers from "@pages/Suppliers";
import Clients from "@pages/Clients";
import Company from "@pages/Company";
import Profil from "@pages/Profil";
import UserExport from "./contexts/UserContext";

import "./App.css";

function App() {
  return (
    <UserExport.ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/suppliers/:id" element={<Suppliers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/company" element={<Company />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserExport.ContextProvider>
  );
}

export default App;
