/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

import ProtectedRoute from "@components/layout/ProtectRoute";
import DashboardLayout from "@components/layout/DashBoardLayout";
import Login from "@pages/Login";
import Company from "@pages/Company";
import CompanyDetails from "@pages/CompanyDetails";
import Profil from "@pages/Profil";

import DashboardLayoutRetailer from "@components/layout/DashBoardLayoutRetailer";
import Products from "@retailersP/Products";
import Suppliers from "@retailersP/Suppliers";
import SuppliersDetails from "@retailersP/SuppliersDetails";
import ProductsDetails from "@retailersP/ProductsDetails";

import DashboardLayoutSupplier from "@components/layout/DashBoardLayoutSupplier";
import SuppliersProducts from "@suppliersP/SupProducts";
import SuppliersProductsDetails from "@suppliersP/SupProductsDetails";
import SuppliersClients from "@suppliersP/SuppliersClients";
import SuppliersClientsDetails from "@suppliersP/SuppliersClientsDetails";

import UserExport from "@contexts/UserContext";

import "./App.css";

function App() {
  const { user } = useContext(UserExport.UserContext);

  return (
    <BrowserRouter>
      <div className="h-screen bg-center bg-cover">
        <Routes>
          {/* COMMON */}
          <Route path="/" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="company" element={<Company />} />
            <Route path="company/:id" element={<CompanyDetails />} />
            <Route path="profil" element={<Profil />} />
          </Route>

          {/* RETAILERS */}
          <Route
            path="/retailer"
            element={
              <ProtectedRoute user={user}>
                <DashboardLayoutRetailer />
              </ProtectedRoute>
            }
          >
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductsDetails />} />
            <Route path="suppliers" element={<Suppliers />} />
            <Route path="suppliers/:id" element={<SuppliersDetails />} />
          </Route>

          {/* SUPPLIERS */}
          <Route
            path="/supplier"
            element={
              <ProtectedRoute user={user}>
                <DashboardLayoutSupplier />
              </ProtectedRoute>
            }
          >
            <Route path="products" element={<SuppliersProducts />} />
            <Route path="products/:id" element={<SuppliersProductsDetails />} />
            <Route path="client" element={<SuppliersClients />} />
            <Route path="client/:id" element={<SuppliersClientsDetails />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
