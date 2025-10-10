import React from 'react'
import { Link } from 'react-router'


export default function Cars() {
    return (
        <>
            <div className="hero_bann">

                 <div className=""style={{ backgroundImage: `url(/images/slide-img1.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="relative isolate px-6 py-4 lg:px-8">
                         
                        <div className="mx-auto max-w-2xl py-12 sm:py-12 lg:py-11">
                        
                        <div className="text-center bg-black/60 p-5 rounded  ">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white  mt-6">
                            Better Drive , Better Lives
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                            Make your dreams real with a personal Car Driving
                            </p>
                            <div className="my-6 flex items-center justify-center gap-x-6">
                            <Link
                                href="#"
                                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                            
                            </div>
                        </div>
                        </div>
                         
                    </div>
                 </div>

            </div>
            <div className="service_box p-5">

                <h3 className="text-3xl font-medium text-dark mb-6 text-center">Our Services</h3>
                <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="shadow-xl bg-pink-500 m-2 p-3 rounded-lg">
                        <div className='slideBox '>
                            <img src="/images/slider_img2.jpg" className='h-45 w-full rounded object-cover'/> 
                            <div className='slid_box_cont'>
                                <h4 className='text-xl my-4 font-bold text-white'>Drive home your dream car</h4>
                                <div className=''>
                                    <p className='flex mb-2 text-white'><img src="/images/ico1.svg" className='pe-2'/>140 quality checks</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico2.svg" className='pe-2'/>7-day return</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico3.svg" className='pe-2'/>Finance it your way </p>
                                </div>
                                <Link to="/"><button className="cursor-pointer my-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">View all</button></Link>
                            
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl bg-cyan-500  m-2 p-3  rounded-lg">
                        <div className='slideBox'>
                            <img src="/images/slider_img3.jpg"className='h-45 w-full rounded object-cover'/> 
                             <div className='slid_box_cont'>
                                <h4 className='text-xl my-4 font-bold text-white'>Drive home your dream car</h4>
                                <div className=''>
                                    <p className='flex mb-2 text-white'><img src="/images/ico1.svg" className='pe-2'/>140 quality checks</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico2.svg" className='pe-2'/>7-day return</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico3.svg" className='pe-2'/>Finance it your way </p>
                                </div>
                                <Link to="/"><button className="cursor-pointer my-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">View all</button></Link>
                            
                            </div>
                        </div>
                    </div>
                    <div className="shadow-xl bg-purple-700 m-2 p-3  rounded-lg">
                        <div className='slideBox'>
                            <img src="/images/slider_img2.jpg"className='h-45 w-full rounded object-cover'/> 
                             <div className='slid_box_cont'>
                                <h4 className='text-xl my-4 font-bold text-white'>All Your Credit in Palacer</h4>
                                <div className=''>
                                    <p className='flex mb-2 text-white'><img src="/images/ico1.svg" className='pe-2'/>140 quality checks</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico2.svg" className='pe-2'/>7-day return</p>
                                    <p className='flex mb-2 text-white'><img src="/images/ico3.svg" className='pe-2'/>Finance it your way </p>
                                </div>
                                <Link to="/"><button className="cursor-pointer my-4 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">View all</button></Link>
                            
                            </div>
                        </div>
                    </div>
                     
                </div>


            </div>
            <div className="brnd_box px-10 pt-10 pb-20">

                <h3 className="text-3xl font-medium text-dark mb-8 text-center">Explore Popular Brands</h3>
                <div className="grid  sm:grid-cols-2 md:grid-cols-6 gap-4">
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/suzuki.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-300'>maruti Suzuki</p>
                        <p className='text-blue-600 font-bold'>30+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/hyundai.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Hyundai</p>
                        <p className='text-blue-600 font-bold'>60+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/tata.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Tata</p>
                        <p className='text-blue-600 font-bold'>30+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/kia.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Kia</p>
                        <p className='text-blue-600 font-bold'>20+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/suzuki.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Maruti Suzuki</p>
                        <p className='text-blue-600 font-bold'>30+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/honda.avif" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Honda</p>
                        <p className='text-blue-600 font-bold'>10+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/toyota.avif" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-300'>Toyota</p>
                        <p className='text-blue-600 font-bold'>50+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/mahindra.avif" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Mahindra</p>
                        <p className='text-blue-600 font-bold'>56+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/renault.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Renault</p>
                        <p className='text-blue-600 font-bold'>10+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/skoda.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Skoda</p>
                        <p className='text-blue-600 font-bold'>30+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/mercedez.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Mercedez Benz</p>
                        <p className='text-blue-600 font-bold'>24+ Cars</p>
                     </div>
                     <div className='shadow-xl rounded-xl p-4 text-center border border-gray-200'>
                       <img src="/images/suzuki.png" className=' w-25 mx-auto object-contain'/> 
    
                        <p className='text-slate-500'>Maruti Suzuki</p>
                        <p className='text-blue-600 font-bold'>20+ Cars</p>
                     </div>
                     
                </div>


            </div>
        </>
    )
}
