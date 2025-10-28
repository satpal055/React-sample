import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';  // changes the route programmatically.
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export default function User() {
  const [formData, setFormdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
  })

  const [columns, setColumns] = useState({
    firstName: true,
    lastName: true,
    email: true,
    country: true,
  });

  const toggleColumn = (col) => {
    setColumns({ ...columns, [col]: !columns[col] });
  };

  const [tableData, setTabledata] = useState([]);

  const [editIndex, seteditIndex] = useState(null);

  // ✅ Load data on first render
  useEffect(() => {
    const savedData = localStorage.getItem("users");
    if (savedData) {
      setTabledata(JSON.parse(savedData));
    }
  }, []);

  // ✅ Save data whenever tableData changes

  useEffect(() => {
    if (tableData.length > 0) {
      localStorage.setItem("users", JSON.stringify(tableData));
    }
  }, [tableData]);


  const handlChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value })
  }

  const submitUser = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.country) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    if (editIndex !== null) {     // edit index value not equal to null 
      const updateData = [...tableData]; // spread operator collect all data can cahnge and edit data(make a copy of current table row)
      updateData[editIndex] = formData; //  aaray picks value goes to index number (update specific row)
      setTabledata(updateData); //passes value 
      seteditIndex(null);

      toast.success("User Updated")

    }
    else {
      setTabledata([...tableData, formData]);
      toast.success("New User Added")
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxiUnkSzxnvfkieieS-0LOUNL-aoCNnAwPwT_s0h-3EcViWalrX-aZQz1beaJ6TWxCX/exec", {
        method: "POST",
        mode: "no-cors", // required for Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });



    } catch (error) {
      console.error('error')
    }

    setFormdata({ firstName: "", lastName: "", email: "", country: "" })

  };


  const editUser = (index) => {
    setFormdata(tableData[index]);
    seteditIndex(index);
  }

  const deleteUser = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const filterData = tableData.filter((_, i) => i !== index); //This line is used for deleting a row from your table.
        setTabledata(filterData);

        Swal.fire(
          'Deleted',
          'User Deleted',
          'success'
        )
      }
    })

  }

  const navigate = useNavigate();
  const goToDetails = (user) => { // here user is argument
    navigate(`/Users/${user.firstName}`, { state: user });// passes the entire user object to the destination route without showing it in the URL

  }
  return (
    <div>
      <h3 className='text-3xl text-center'>Welcome to User Dashboard</h3>

      <form onSubmit={submitUser}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input onChange={handlChange} value={formData.firstName}
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    id="last-name" onChange={handlChange} name="lastName" value={formData.lastName}

                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email" onChange={handlChange} value={formData.email}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                  Country
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="country" value={formData.country} onChange={handlChange}
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="">-- Select Country --</option>
                    <option value="india">India</option>
                    <option value="Canada">Canada</option>
                    <option value="Mexico">Mexico</option>
                  </select>

                </div>
              </div>

            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm/6 font-semibold text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add User
              </button>
              <button
                type="submit"
                className="rounded-md bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-orange-Z00 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </form>

      <table className="table-auto mt-5 w-full">
        <thead className='text-left'>
          <tr>
            {columns.firstName && <th className="px-4 py-2">First Name</th>}
            {columns.lastName && <th className="px-4 py-2">Last Name</th>}
            {columns.email && <th className="px-4 py-2">Email Address</th>}
            {columns.country && <th className="px-4 py-2">Country</th>}
            <th className="px-4 py-2">
              <select
                onChange={(e) => toggleColumn(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Hide/Show</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="email">Email</option>
                <option value="country">Country</option>
              </select>
            </th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((user, index) => (
            <tr key={index}>
              {columns.firstName && <td className="border px-4 py-2">{user.firstName}</td>}
              {columns.lastName && <td className="border px-4 py-2">{user.lastName}</td>}
              {columns.email && <td className="border px-4 py-2">{user.email}</td>}
              {columns.country && <td className="border px-4 py-2">{user.country}</td>}
              <td className="ps-3 py-2"><button onClick={() => goToDetails(user)}><i className="fa-solid fa-eye"></i></button></td>
              <td className="ps-3 py-2"><button onClick={() => editUser(index)}><i className="fa-solid fa-pen"></i></button></td>
              <td className="ps-3 py-2"><button onClick={() => deleteUser(index)}><i className="fa-solid fa-trash"></i></button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
