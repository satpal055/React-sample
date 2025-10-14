 
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
   const role  = localStorage.getItem("role");
    const name = localStorage.getItem("name");
    const image = localStorage.getItem("image");
    // const navigate = useNavigate();
    console.log(role)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white  h-full">
        <div className="p-4 flex items-center space-x-2">
          <h1 className="text-xl font-bold">MyDashboard</h1>
        </div>

        <div className="mt-6">
            <div className="px-4 py-2 bg-primary-700">
                <div className="flex items-center space-x-2">
                        <Link to="/dashboard" className="block px-4 py-2  ">
                        <i className="fas fa-tachometer-alt pe-2"></i>
                            Dashboard
                        </Link>
                 </div>
            </div>
            <div className="px-4 py-2 bg-primary-700">
                <div className="flex items-center space-x-2">
                        <Link to="./User" className="block px-4 py-2 ">
                             <i className="fas fa-users pe-2"></i>
                            Users
                        </Link>
                 </div>
            </div>
         <div className="px-4 py-2 bg-primary-700">
                    <div className="flex items-center space-x-2">
                        <Link to="./Products" className="block px-4 py-2 ">
                         <i className="fas fa-shopping-cart pe-2"></i>
                            Products
                        </Link>
                       
                       
                    </div>
                </div>
           <div className="px-4 py-2 bg-primary-700">
                    <div className="flex items-center space-x-2">
                        <Link to="./Calculator" className="block px-4 py-2 ">
                         <i className="fas fa-shopping-cart pe-2"></i>
                            Calculator
                        </Link>
                       
                       
                    </div>
                </div>
                <div className="px-4 py-2 bg-primary-700">
                    <div className="flex items-center space-x-2">
                        <Link to="./Table" className="block px-4 py-2 ">
                         <i className="fas fa-shopping-cart pe-2"></i>
                            Table
                        </Link>
                       
                       
                    </div>
                </div>
                <div className="px-4 py-2 bg-primary-700">
                    <div className="flex items-center space-x-2">
                        <Link to="./SendData" className="block px-4 py-2 ">
                         <i className="fas fa-shopping-cart pe-2"></i>
                            SendData
                        </Link>
                       
                       
                    </div>
                </div>
          
         
        </div>

        {/* User info at bottom */}
        <div className="  p-4 w-64">
          <div className="flex items-center space-x-2">
            <img
              src= {image}
              alt="User"
              className="rounded-full w-10 h-10"
            />
            <div>
              <div className="font-semibold">{name}</div>
              <div className="text-sm text-gray-300">{role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1   p-6 bg-gray-100 overflow-y-auto">
        <Outlet /> {/* This is where nested pages render */}
      </div>
    </div>
  );
};

export default DashboardLayout;
