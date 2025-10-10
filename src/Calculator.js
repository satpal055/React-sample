import React, { useEffect, useState } from 'react'

export default function Calculator() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null)

    // const increment = () =>{
    //     setVal(value+1)
    // }

    // const decrement = () =>{
    //     setVal(value-1)
    // }


    // const submitAdd =() => {
    //      setResult(Number(num1)+Number(num2))
    // }

    useEffect(() => {
        const n1 = parseFloat(num1) || 0; // Convert num1 to number, default 0 if empty/invalid
        const n2 = parseFloat(num2) || 0; // Convert num2 to number, default 0 if empty/invalid
        setResult(n1 + n2)                  // Calculate sum and update state
    }, [num1, num2])      // Run this effect whenever num1 or num2 changes       
                      
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-4'>It's Dummy (Add) Calculator</h2>

            {/* <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition" onClick={increment}>+</button>
        <p className='p-10'>{value}</p>
         <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition" onClick={decrement}>-</button> */}

            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-60 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition" />

            <br />
            <br />

            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-2 text-lg w-60 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition" />

            <br />
            <br />
            {/* <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"  onClick={submitAdd}>Calculate</button>   */}
            <br />
            <p>Result :{result} </p>

        </div>
    )
}
