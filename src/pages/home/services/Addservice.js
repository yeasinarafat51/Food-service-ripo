import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/authprovider/Authprovider';
import ServicesCard from './ServicesCard';

const Addservice = () => {
   
    const [services, setservices] = useState([]);
    useEffect( () =>{
        fetch('https://server11.vercel.app/servic')
        .then(res =>res.json())
        .then(data => setservices(data))
    },[])

    // const handleadd = event =>{
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const img =form.img.value;
    //     const description = form.description.value;
    //     const price =form.price.value;
        
       
       
        

    //     const review = {
    //         name,
    //        img,
    //        description,
    //         price,
           
    //     }

    //     fetch('https://server11.vercel.app/servic',{
    //         method:'POST',
    //         headers:{
    //             'content-type':'application/json'
    //         },
    //         body:JSON.stringify(review)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //         if(data.acknowledged){
    //             alert('review success')
    //             form.reset()
    //         }
    //     })
    //     .catch(er => console.error(er));

    // }
    const handleServiceAdded = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
       
        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        
        console.log(  name, price, description, );

        const review = {

            
            img,
            name,
            price,
            description,
           
        }
        console.log(review)

        fetch('https://server11.vercel.app/servic', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('order placed successfully')
                    setservices([...services, review])
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }



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
       {/* <form onSubmit={() =>handleadd()}>
       <div className='grid lg: grid-cols-2 gap-4'>
       <input type="text" name="name" placeholder="Type name" className="input input-bordered w-full " />
       <input type="text"name="img" placeholder="Type img" className="input input-bordered w-full " />
       <input type="text"name="price" placeholder="Type price" className="input input-bordered w-full " />
       <input type="text"name="description" placeholder="Type dise" className="input input-bordered w-full " />
      
       </div>
       <input className='btn' type="submit"  value="Add Service"/>
       </form> */}
       <form onSubmit={handleServiceAdded} className='grid grid-cols-2 gap-6 mx-4'>
            
            
            <input name="name" type="name" placeholder="name" className="input w-full bg-gray-200 rounded-full" />
            <input name="price" type="text" placeholder="price" className="input w-full bg-gray-200 rounded-full" />
            <input name="description" type="text" placeholder="description" className="input w-full bg-gray-200 rounded-full" />
            <input name="img" type="img" placeholder="img" className="input w-full bg-gray-200 rounded-full" />
            
            <input type="submit" value="ADD" className="btn btn-primary w-full cols-2"/>
            </form>
      
        </div>
    );
};

export default Addservice;