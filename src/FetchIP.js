import React, { useEffect, useState } from 'react'

export default function FetchIP() {

    const [posts,setPost] = useState([])
    // const inpRef = useRef()

const resultPost= async()=>{
    try {
        const apiURL='https://jsonplaceholder.typicode.com/posts'
        const response = await fetch(apiURL);
        const post = await response.json();
        // console.log(data);
        setPost(post)
        
    } catch (error) {
        console.error(error)
    }
    
}

useEffect(()=>{
    resultPost()
},[])

  return (
    <>
         <div className='bg-cyan-300 p-4'>
           <div className=''>
             {/* <div className='search_bar text-center pt-5'>
                <input ref={inpRef} type='text' placeholder='Search IP' className='border border-gray-300 rounded-md bg-white px-3 py-2 ms-2 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                <button onClick={()=>resultIp(inpRef.current.value)}><i className="hover:bg-yellow-300 fa-solid fa-magnifying-glass bg-white p-3 rounded-full ms-3"></i></button>             
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                 {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-4 hover:bg-yellow-100 transition m-3"
            >
              <h3 className="text-xl font-semibold text-indigo-700">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.body}</p>
              <p className="text-sm text-gray-400 mt-3">Post ID: {post.id}</p>
            </div>
          ))}
            </div>

         
           </div>
    </div>
    </>
   
  )
}
