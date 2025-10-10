import React, { useEffect, useState } from "react";
import { EmployeeData } from "./EmployeeData";

export default function Table() {
  const [data, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  // Load initial data
  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // ✅ Handle Edit
  const editData = (id) => {
    const record = data.find((item) => item.id === id); // data.find(...)It searches the array data for the first element that matches a condition.
    if (record) {
      setIsUpdate(true);
      setId(id);
      setFirstName(record.firstName);
      setLastName(record.lastName);
      setAge(record.age);
    }
  };

  // ✅ Handle Delete
  const deleteData = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    }
  };

  // ✅ Clear form inputs
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setId(null);
    setIsUpdate(false);
  };

  // ✅ Add or Update record
  const handleSave = () => {
    // Validation
    if (!firstName || !lastName || !age) {
      alert("Please fill all fields!");
      return;
    }

    if (isUpdate) {
      // Update existing
      const index = data.findIndex((item) => item.id === id);
      if (index !== -1) {
        const updatedData = [...data];
        updatedData[index] = { id, firstName, lastName, age };
        setData(updatedData);
        alert("✅ Record updated successfully!");
      }
    } else {
      // Add new
      const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
      const newRecord = { id: newId, firstName, lastName, age };
      setData([...data, newRecord]);
      alert("✅ Record added successfully!");
    }

    handleClear();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="bg-cyan-400 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-3 text-white">
          Employee Form
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              className="border border-gray-300 rounded-md px-3 py-2 ms-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded-md px-3 py-2 ms-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter Age"
              className="border border-gray-300 rounded-md px-3 py-2 ms-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div className="text-center mt-4">
          {isUpdate ? (
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md transition m-1"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition m-1"
            >
              Save
            </button>
          )}

          <button
            onClick={handleClear}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 rounded-md transition m-1"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border border-gray-300 text-center shadow-lg rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">ID</th>
              <th className="p-3 border">First Name</th>
              <th className="p-3 border">Last Name</th>
              <th className="p-3 border">Age</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.id}</td>
                  <td className="p-2 border">{item.firstName}</td>
                  <td className="p-2 border">{item.lastName}</td>
                  <td className="p-2 border">{item.age}</td>
                  <td className="p-2 border">
                    <button
                      onClick={() => editData(item.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition m-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition m-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

     
      </div>
    </div>
  );
}
