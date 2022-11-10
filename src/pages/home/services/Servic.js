import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Servic = () => {
    const [services, setservices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/servic')
        .then(res =>res.json())
        .then(data => setservices(data))
    },[])
    return (
        <div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
           
            {
                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                
                ></ServicesCard>)

            }
        </div>
      
      
    </div>
    );
};

export default Servic;