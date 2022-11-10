import React from 'react';
import person from '../../assets/chicken.jpg'
import parts from '../../assets/home.png'

const Deleviry = () => {
    return (
        
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
         <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
         </div>
          <div className='w-1/2'>
              <p className=' text-2xl font-bold text-orange-600'>Home Delevairy</p>
            <h1 className=" my-5 text-5xl font-bold">All Division <br/>Home Services</h1>
            <p className="py-6">Delivery is the process of transporting goods from a source location to a predefined destination.</p>
            <button className="btn btn-primary">Orders</button>
          </div>
        </div>
      </div>
    );
};

export default Deleviry;