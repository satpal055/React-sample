import React, { useEffect, useRef, useState } from 'react'

export default function Wheather() {

    const [weatherData, setWheatherData] = useState(false)
    const inpRef = useRef()

    const search = async (city) => {
        try {
            const apiKey = "4da7bddc0a2ae48e52d83825b7ba8913";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            setWheatherData({
                humidity: data.main.humidity,
                wind: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                // icon:
            })
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        search("New York");
    }, [])
    return (
        <>
            <div className=' bg-slate-200 p-20'>

                <div className='bg-indigo-800 w-sm mx-auto p-3 rounded text-center'>
                    <div className='search_bar text-center pt-5'>
                        <input ref={inpRef} type='text' placeholder='Search' className='border border-gray-300 rounded-md bg-white px-3 py-2 ms-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <button onClick={() => search(inpRef.current.value)}><i className="hover:bg-yellow-300 fa-solid fa-magnifying-glass bg-white p-3 rounded-full ms-3"></i></button>
                    </div>
                    <i className="fa-solid fa-sun text-5xl text-yellow-400 py-10"></i>

                    <p className='text-white text-4xl font-bold temperature font-mono'>{weatherData.temperature}* c</p>
                    <p className='text-white text-2xl location font-mono py-3'>{weatherData.location}</p>
                    <div className='wheather_data flex justify-evenly py-4'>
                        <div className='col text-white flex justify-items-center'>
                            <i class="fa-solid fa-wind text-white pt-2"></i>
                            <div className='text-left ps-3'>
                                <div className='font-mono'>{weatherData.humidity}</div>
                                <span className='col text-yellow-500 font-bold font-mono'>Humidity</span>
                            </div>
                        </div>
                        <div className='col text-white flex   justify-items-center'>
                            <i className="fa-solid fa-wave-square text-white pt-2"></i>
                            <div className='text-left ps-3'>
                                <div className='font-mono'>{weatherData.wind}Km / Hr</div>
                                <span className='col text-yellow-500 font-bold font-mono'>Wind</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
