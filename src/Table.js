import React, { useEffect, useState } from "react";
import { EmployeeData } from "./EmployeeData";

export default function Table() {
  const [data, setData] = useState([]); // Holds all employee records
  const [firstName, setFirstName] = useState(""); // First name input
  const [lastName, setLastName] = useState(""); // Last name input
  const [age, setAge] = useState(""); // Age input
  const [id, setId] = useState(null);   // Current editing record ID
  const [isUpdate, setIsUpdate] = useState(false); // True if editing a record
  const [sortConfig, setSortConfig] = useState({key:null,direction:"asc"})  // Sorting info
  const [columns,setColumns] = useState(["id","firstName","lastName","age"]);
  const [draggedCol,setDraggedCol] = useState(null) ;
  const [draggedRowIndex, setDraggedRowIndex] = useState(null);



  // Load initial data
  useEffect(() => {
    setData(EmployeeData);
  }, []);

const handleDragStart = (col)=>{
  setDraggedCol(col)
}

const handleDrop =(targetCol)=>{
  const newCols = [...columns];
  const fromIndex = newCols.indexOf(draggedCol);
  const toIndex = newCols.indexOf(targetCol);

  newCols.splice(fromIndex,1);
  newCols.splice(toIndex,0,draggedCol)

  setColumns(newCols);
  setDraggedCol(null)
}
const handleRowDragStart = (index) => {
  setDraggedRowIndex(index);
};

const handleRowDrop = (index) => {
  if (draggedRowIndex === null) return;

  const newData = [...data];
  const draggedItem = newData[draggedRowIndex];
  
 
  newData.splice(draggedRowIndex, 1);
 
  newData.splice(index, 0, draggedItem);

  setData(newData);
  setDraggedRowIndex(null);
};

const handleSort = (key)=>{
  let direction = "asc";

  if(sortConfig.key === key && sortConfig.direction === "asc"){
    direction = "desc"
  }

  const sortedData = [...data].sort((a,b)=>{
    if(a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if(a[key] > b[key]) return direction === "asc" ? 1 : -1;

    return 0;
 
  });

    setData(sortedData);
    setSortConfig({key,direction})
}

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
              {columns.map((col)=>(
                <th className="p-3 border" key={col} draggable onDragStart={()=>handleDragStart(col)} onDragOver={(e)=>e.preventDefault()} onDrop={()=>handleDrop(col)} onClick={() => handleSort(col)} style={{cursor: "move",backgroundColor: draggedCol === col ? "#d3f9d8" : "#f3f3f3",padding: "8px", }}>{col}{" "}{sortConfig.key === col ? sortConfig.direction === "asc" ? "▲" : "▼" : ""}</th>
              ))}
              
              {/* <th className="p-3 border" onClick={()=>handleSort("firstName")}>First Name{" "}{sortConfig.key === "firstName" ? sortConfig.direction === "asc" ? "▲" : "▼" : ""}</th>
              <th className="p-3 border" onClick={()=>handleSort("lastName")}>Last Name{" "} {sortConfig.key==="lastName" ? sortConfig.direction ===  "asc" ? "▲" : "▼" :""}</th>
              <th className="p-3 border" onClick={()=>handleSort("age")}>Age{" "} {sortConfig.key === "age" ? sortConfig.direction === "asc" ? "▲" : "▼" : ""}</th>
              <th className="p-3 border">Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id} className="hover:bg-gray-50 " draggable={true}  
  onDragStart={() => handleRowDragStart(index)}
  onDragOver={(e) => e.preventDefault()}
  onDrop={() => handleRowDrop(index)}
  style={{
    backgroundColor: draggedRowIndex === index ? "#f0f8ff" : "transparent",
    cursor: "move",
  }}>




                  {columns.map((col)=>(
                      <td className="p-2 border" key={col}>{item[col]}</td>
                  ))}
                  
                  {/* <td className="p-2 border">{item.firstName}</td>
                  <td className="p-2 border">{item.lastName}</td>
                  <td className="p-2 border">{item.age}</td> */}
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
