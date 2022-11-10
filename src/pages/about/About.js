import React from 'react';
import person from '../../assets/person.jpg'
import parts from '../../assets/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
         <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
         </div>
          <div className='w-1/2'>
              <p className=' text-2xl font-bold text-orange-600'>About Service</p>
            <h1 className=" my-5 text-5xl font-bold">Chicken Fried <br/>Chicken Masala <br/>Chicken Shawarma</h1>
            <p className="py-6">Fried chicken, also known as Southern fried chicken, is a dish consisting of chicken pieces that have been coated with seasoned flour or batter and pan-fried, deep fried, pressure fried, or air fried.</p>
            <button className="btn btn-primary">Deatails</button>
          </div>
        </div>
      </div>
    );
};

export default About;