import React from "react";
import { Routes, Route } from "react-router-dom";

// import Dashboard from "../Components/Dashboard.js";
import Login from "../Login.js";
import Header from "../Components/common/Header.js";
import Footer from "../Components/common/Footer.js";
import About from "../About.js";
import Service from "../Service.js";
import Contact from "../Contact.js";
import Cars from "../Cars.js";
import ProtectRoutes from "../ProtectRoutes.js";
import Products from "../Products.js";
import User from "../User.js"
import DashboardHome from "../Components/DashboardHome.js";
import DashboardLayout from "../Components/DashboardLayout.js";
import UserDetails from "../UserDetails.js";
import RegisterUser from "../RegisterUser.js";
import Calculator from "../Calculator.js";
import Table from "../Table.js";
import Wheather from "../Wheather.js";
import FetchIp from "../FetchIP.js"
const AppRoutes = () => {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/RegisterUser" element={<RegisterUser />} />
        <Route path="/Wheather" element={<Wheather />} />
         <Route path="/FetchIp" element={<FetchIp />} />
        {/* Protected routes */}
        <Route element={<ProtectRoutes />}>
          <Route path="/" element={<Cars />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/Users/:id" element={<UserDetails />} />
           

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="user" element={<User />} />
            <Route path="products" element={<Products />} />
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Table" element={<Table />} />
          </Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoutes;
