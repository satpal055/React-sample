import React, { useState } from 'react'  // for storing form data, loading state, and messages.
import axios from 'axios';
import { useRef } from 'react';  // useRef → to control the file input directly.
import { useNavigate } from 'react-router-dom'; // to redirect the user after registration.


export default function RegisterUser() {

    const [formData, setFormData] = useState({   // formData → holds the values of the input fields.
        name: '',
        email: '',
        password: '',
        role: '',
        image: null,
    });

    const [loading, setLoading] = useState(false);  // shows "Registering..." on the button while the request is in progress.
    const [message, setMessage] = useState("");  // message → shows success/error messages.

    const fileInputRef = useRef(null);  // allows us to reset the file input after submission.
    const navigate = useNavigate();  //     navigate → allows redirecting to login page after registration.


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: name === "image" ? files[0] : value, })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // Prepare form data for sending
            const formDataSend = new FormData();
            formDataSend.append("name", formData.name);
            formDataSend.append("email", formData.email);
            formDataSend.append("password", formData.password);
            formDataSend.append("role", formData.role);
            if (formData.image) {
                formDataSend.append("image", formData.image);
            }

            // Send data to backend
            const response = await axios.post(
                "https://chatting-backend-1-3xl7.onrender.com/user/register",
                formDataSend
            );

            // Success message from backend
            setMessage(response.data.message || "User registered successfully 🎉");

            navigate("/login");

            // Reset form
            setFormData({ name: "", email: "", password: "", role: "", image: null });

            if (fileInputRef.current) {
                fileInputRef.current.value = null;
            }

        } catch (error) {
            console.error(error);

            // Only use backend response for error handling
            if (error.response && error.response.data) {
                // Use backend-provided message
                setMessage(error.response.data.message || "Registration failed ❌");
            } else {
                // If backend didn't respond
                setMessage("Something went wrong ❌");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='bg-gray-100 p-20'>
                <h3 className='text-3xl text-center'>Welcome to Register User </h3>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm/6 font-medium text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input value={formData.name} onChange={handleChange} name="name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label className="block text-sm/6 font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input value={formData.password} onChange={handleChange} name="password" type="password" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>



                                <div className="sm:col-span-3">
                                    <label className="block text-sm/6 font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input onChange={handleChange} value={formData.email}
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                    <input onChange={handleChange}
                                        type="file" ref={fileInputRef}
                                        name="image"
                                        accept="image/*"

                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                                        Role
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select onChange={handleChange}
                                            value={formData.role}
                                            name="role"
                                            autoComplete="country-name"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value="">-- Role --</option>
                                            <option value="Admin">Admin</option>
                                            <option value="Subadmin">Subadmin</option>

                                        </select>

                                    </div>
                                </div>

                                <div className="sm:col-span-3">

                                    <div className="mt-6 flex items-center justify-end gap-x-6">
                                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                            Cancel
                                        </button>
                                        <button
                                            type="submit" disabled={loading}
                                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {loading ? "Registering..." : "Register"}

                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </form>
                {message && (
                    <p
                        className={`text-center mt-4 ${message.includes("success")
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}

                {/* <table className="table-auto mt-5 w-full">
        <thead className='text-left'>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email Adress</th>
            <th className="px-4 py-2">Country</th>

          </tr>
        </thead>
        <tbody>
         
            <tr  >
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="  ps-3 py-2"><button o ><i class="fa-solid fa-eye"></i></button></td>
              <td className="  ps-3 py-2"><button ><i class="fa-solid fa-pen"></i></button></td>
              <td className="  ps-3 py-2"><button ><i class="fa-solid fa-trash"></i></button></td>
            </tr>
           


        </tbody>
      </table> */}
            </div>
        </>
    )
}
