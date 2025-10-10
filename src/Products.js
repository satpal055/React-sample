
import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Products() {

  const [products, setProducts] = useState([]);
  const [limit] = useState(6);
  const [skip,setSkip] = useState(0)
  const [total, setTotal] = useState(0);  
  const [loading, setLoading] = useState(false)
// 12345
  useEffect(() => {
    const myFunction = async () => {

      try {
        const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        // console.log("Data",response.data)
        setProducts(response.data.products)
        setTotal(response.data.total)
      } catch (error) {
        console.error("error", error);
      }
      finally {
        setLoading(false)
      }
    }
    myFunction()
  }, [limit,skip])

  const totalPages = Math.ceil(total/limit);
  const currentPage = skip/limit+1;

 const handleNext =()=>{
    if(currentPage<totalPages){
      setSkip(skip+limit)
    }
 }

 const handlePrev =()=>{
  if(currentPage>1){
    setSkip(skip-limit);
  }
 }




  return (
    <>
      <h2 className='text-3xl text-center mb-10'>Welcome to Product Details</h2>
      <div>
        <div className="max-w-full rounded overflow-hidden  ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
            {products.map((product) => (
              <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-2 border-2">
                <img className="border w-full" src={product.images[0]} alt={product.title} />
                <div className="font-bold text-xl my-2">{product.title}</div>
                <div className="text-gray-700 text-base mb-2">{product.description}</div>
                <div className="font-semibold">Price : ${product.price}</div>
              </div>
            ))}
          </div>
          {/* {products.length < total && (
            <div className="text-center my-6">
              <button
                onClick={loadMore}
                disabled={loading}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )} */}

          <div className="flex justify-center items-center gap-4 mt-8">
           <button onClick={handlePrev} disabled={currentPage === 1 || loading} className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 hover:bg-gray-400" >
            Previous
          </button>

          <span className="text-lg font-semibold">Page {currentPage} of {totalPages}</span>

          <button onClick={handleNext} disabled={currentPage === totalPages || loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
            Next
          </button>
        </div>

        </div>
      </div>
    </>
  )
}
