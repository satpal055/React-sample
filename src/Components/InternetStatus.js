import React, { useEffect, useState } from "react";

export default function InternetStatus() {
  // ✅ start with actual internet connection state
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showPopup,setShowPopup] = useState(false)

  useEffect(() => {
    // ✅ function to update state whenever online/offline changes
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // add event listeners
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // ✅ check once when component mounts
    updateOnlineStatus();

    // cleanup
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

useEffect(()=>{
    let timer;
    if(!isOnline){
        timer = setTimeout(()=>setShowPopup(true),800)
    }
    else{
        setShowPopup(false)
    }
    return ()=>clearTimeout(timer)
},[isOnline]);

  // ✅ hide popup when online
  if (isOnline || !showPopup) return null;

  // ✅ show popup when offline
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center animate-fade-in">
        <h2 className="text-xl font-semibold text-red-600 mb-3">
          ⚠️ DUDE ! No Internet Connection
        </h2>
        <p className="text-gray-700 mb-4">
          Please check your network or Wi-Fi connection.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
