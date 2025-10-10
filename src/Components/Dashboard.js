import React from 'react'
// import {  useState } from 'react';
import {  useNavigate } from "react-router-dom";
import { baseurl } from '../utils/Helper';

const Dashboard = () => {
  
    // const [mail,setMail] = useState('')
    // const [pass,setPass] = useState('')

    const role  = localStorage.getItem("role");
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")
   
    // console.log(role)
    
 
    
    //  const firstName = localStorage.getItem("firstName");
    // console.log("First Name from localStorage:", firstName);

    // useEffect(()=>{
    //   setMail(localStorage.getItem('mail') || '');
    //   setPass(localStorage.getItem('pass') || '');
    // },[])

 
  return (
    <>
      {/* <div classNameNameNameNameName='bg-amber-900 p-5 text-center'>
        <h1 classNameNameNameNameName='text-3xl mb-5 text-white '>Welcome {role}</h1>
        <p classNameNameNameNameName='text-xl text-cyan-500'>Your First Name is ::- {firstName}</p>
        <p classNameNameNameNameName='text-xl text-red-500'>Your Email id is ::- {email}</p>
      </div> */}
   

   <div className="flex h-screen">
         
        <div className="w-64 bg-primary-800 text-white hidden md:block">
            <div className="p-4 flex items-center space-x-2">
                <i className="fas fa-shapes text-2xl"></i>
                <h1 className="text-xl font-bold">MyDashboard</h1>
            </div>
            <div className="mt-6">
                <div className="px-4 py-2 bg-primary-700">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </div>
                </div>
                <div className="px-4 py-2 hover:bg-primary-700 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-users"></i>
                        <span>Users</span>
                    </div>
                </div>
                <div className="px-4 py-2 hover:bg-primary-700 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-shopping-cart"></i>
                      <span><a href="https://codepen.io/nkmswot/full/azbEbvV">Products</a></span>
                    </div>
                </div>
                <div className="px-4 py-2 hover:bg-primary-700 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-chart-bar"></i>
                        <span>Analytics</span>
                    </div>
                </div>
                <div className="px-4 py-2 hover:bg-primary-700 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-file-invoice-dollar"></i>
                        <span>Orders</span>
                    </div>
                </div>
                <div className="px-4 py-2 hover:bg-primary-700 cursor-pointer">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-cog"></i>
                        <span>Settings</span>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 p-4 w-64">
                <div className="flex items-center space-x-2">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=75&fm=jpg&w=64&w=64&fit=max" alt="User" className="rounded-full" />
                    <div>
                        <div className="font-semibold">{name}</div>
                        <div className="text-sm text-gray-300">{role}</div>
                    </div>
                </div>
            </div>
        </div>

       
        <div className="flex-1 flex flex-col overflow-hidden">
             
            <header className="bg-white shadow-sm">
                <div className="px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center md:hidden">
                        <button className="text-gray-500 focus:outline-none">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none" />
                            <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                                <i className="fas fa-bell"></i>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <button className="relative p-2 text-gray-500 hover:text-gray-700 focus:outline-none">
                                <i className="fas fa-envelope"></i>
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                           
                        </div>
                    </div>
                </div>
            </header>

       
            <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>
                    <p className="text-gray-600">Welcome back, {name} Here's what's happening today.</p>
                </div>

                 
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                     
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-500">Revenue</div>
                            <div className="bg-green-100 p-1 rounded">
                                <i className="fas fa-chart-line text-green-600"></i>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">$24,780</div>
                        <div className="flex items-center text-sm">
                            <span className="text-green-600 flex items-center">
                                <i className="fas fa-arrow-up mr-1"></i> 12%
                            </span>
                            <span className="text-gray-500 ml-2">from last month</span>
                        </div>
                    </div>
                    
                    
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-500">Orders</div>
                            <div className="bg-blue-100 p-1 rounded">
                                <i className="fas fa-shopping-bag text-blue-600"></i>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">1,482</div>
                        <div className="flex items-center text-sm">
                            <span className="text-green-600 flex items-center">
                                <i className="fas fa-arrow-up mr-1"></i> 8%
                            </span>
                            <span className="text-gray-500 ml-2">from last month</span>
                        </div>
                    </div>
                    
                  
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-500">Customers</div>
                            <div className="bg-purple-100 p-1 rounded">
                                <i className="fas fa-users text-purple-600"></i>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">928</div>
                        <div className="flex items-center text-sm">
                            <span className="text-green-600 flex items-center">
                                <i className="fas fa-arrow-up mr-1"></i> 4%
                            </span>
                            <span className="text-gray-500 ml-2">new customers</span>
                        </div>
                    </div>
                    
             
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-500">Conversion</div>
                            <div className="bg-yellow-100 p-1 rounded">
                                <i className="fas fa-percentage text-yellow-600"></i>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">24.8%</div>
                        <div className="flex items-center text-sm">
                            <span className="text-red-600 flex items-center">
                                <i className="fas fa-arrow-down mr-1"></i> 2%
                            </span>
                            <span className="text-gray-500 ml-2">from last week</span>
                        </div>
                    </div>
                </div>

             
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                   
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">Sales Overview</h3>
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>Last 7 days</option>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                            </select>
                        </div>
                        <div className="h-64 flex items-end space-x-2 mb-4">
                            <div className="h-24 w-8 bg-primary-300 rounded-t-lg"></div>
                            <div className="h-36 w-8 bg-primary-400 rounded-t-lg"></div>
                            <div className="h-28 w-8 bg-primary-300 rounded-t-lg"></div>
                            <div className="h-48 w-8 bg-primary-500 rounded-t-lg"></div>
                            <div className="h-40 w-8 bg-primary-400 rounded-t-lg"></div>
                            <div className="h-52 w-8 bg-primary-600 rounded-t-lg"></div>
                            <div className="h-32 w-8 bg-primary-400 rounded-t-lg"></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                            <div>Sun</div>
                        </div>
                    </div>
                    
                    
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">Traffic Sources</h3>
                            <button className="text-gray-500 hover:text-gray-700">
                                <i className="fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-48 h-48 rounded-full border-8 border-primary-500 relative flex items-center justify-center">
                                <div className="w-36 h-36 rounded-full border-8 border-yellow-400 relative flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border-8 border-green-400 relative flex items-center justify-center">
                                        <div className="text-gray-700 font-semibold">78%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                                <span className="text-sm">Direct</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                <span className="text-sm">Social</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                                <span className="text-sm">Referral</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white rounded-lg shadow mb-6">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">Recent Orders</h3>
                        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                  <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="py-3 px-4 text-gray-700">#1001</td>
                                    <td className="py-3 px-4 text-gray-700">Alice Johnson</td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-1 text-xs text-white bg-green-500 rounded">Completed</span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">Mar 12, 2025</td>
                                    <td className="py-3 px-4 text-gray-700">$320.00</td>
                                    <td className="py-3 px-4">
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 text-gray-700">#1002</td>
                                    <td className="py-3 px-4 text-gray-700">Michael Smith</td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-1 text-xs text-white bg-yellow-500 rounded">Pending</span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">Mar 11, 2025</td>
                                    <td className="py-3 px-4 text-gray-700">$150.00</td>
                                    <td className="py-3 px-4">
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="py-3 px-4 text-gray-700">#1003</td>
                                    <td className="py-3 px-4 text-gray-700">Sophia Brown</td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-1 text-xs text-white bg-red-500 rounded">Cancelled</span>
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">Mar 10, 2025</td>
                                    <td className="py-3 px-4 text-gray-700">$75.00</td>
                                    <td className="py-3 px-4">
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    </div>
    </>
  )
}

export default Dashboard

