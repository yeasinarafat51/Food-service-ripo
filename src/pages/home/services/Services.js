import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect( () =>{
        fetch('https://server11.vercel.app/service')
        .then(res =>res.json())
        .then(data => setservices(data))
    },[])
    return (
        <div>
            <div className='text-center my-10'>
                {/* <p className='text-2xl fond-bold text-orange-600'>Our Services</p> */}
                <h1 className='text-6xl font-semibold  text-orange-600'>Our Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
               
                {
                    services.map(service => <ServicesCard
                    key={service._id}
                    service={service}
                    
                    ></ServicesCard>)

                }
            </div>
            <div className='text-center my-10'>
            <Link to="/servic"><button className="btn btn-outline btn-warning text-center">See All</button></Link>
            </div>
        </div>
    );
};

export default Services;