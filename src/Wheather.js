import React, { useEffect, useRef, useState } from 'react';
import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,CartesianGrid} from "recharts";

export default function Wheather() {

    const [weatherData, setWheatherData] = useState(false);
    const [chartData,setChartData] = useState([])
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
                feels_like:data.main.feels_like,
                temp_min:data.main.temp_min,
                temp_max:data.main.temp_max,
                pressure:data.main.pressure,

                // icon:
            });
            setChartData([
                {name:"Temp", value:data.main.temp},
                {name:"Feels Like",value:data.main.feels_like},
                {name:"Min Temp" , value:data.main.temp_min},
                {name:"Max Temp" , value:data.main.temp_min},
                {name:"Humidity" , value:data.main.humidity},
                {name:"Pressure ", value:data.main.pressure }
            ])
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

                     {/*   graph chartData */  }

                    <div className='bg-white rounded-lg shadow mt-6 p-4 text-black'>
                        <h3 className=''>Weather Details</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={chartData}>
                                <CartesianGrid  strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="value" fill="#6366F1" radius={[5, 5, 0, 0]}/>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                </div>
            </div>

        </>
    )
}
