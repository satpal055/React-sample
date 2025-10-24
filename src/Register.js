import React from 'react'
import {Link} from  'react-router-dom'
 

export default function Register() {
  return (
    <>
       <div className="bg-indigo-500 to-pink-500 p-10">   
            <h2 className='text-2xl font-medium text-white mb-10 text-center'>Welcome Register Here!</h2>        
            <form className="max-w-md mx-auto rounded-md bg-cyan-400 p-8">
            <div className="mb-5">
                <label for="email" className="block mb-4 text-md font-medium text-gray-900 dark:text-white">Enter E-Mail</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name Here"  />
            </div>  
            <div className="mb-5">
                <label for="email" className="block mb-4 text-md font-medium text-gray-900 dark:text-white">Enter Full Name</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Name Here"  />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-4 text-md font-medium text-gray-900 dark:text-white">Generate password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-5">
                <label for="password" className="block mb-4 text-md font-medium text-gray-900 dark:text-white">Re-Enter password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
        
            <div>
                <Link to="/"> 
                  <button type="submit" className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
                </Link>
             </div>
            
            </form>
        </div>
    </>
  )
}
