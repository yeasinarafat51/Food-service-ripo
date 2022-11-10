import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const store = useLoaderData();
    const [user, setuser] = useState(store)

    const handleupdate = event =>{
        event.preventDefault();
        // console.log(user)
        fetch(`https://server11.vercel.app/orders/${store._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount >0){
                // alert('review update')
                toast("Edit success");
                console.log(data);
                event.target.reset()
            }
           
        })
        

        
    }
    const handletext = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newuser = {...user}
        newuser[field] = value;
        setuser(newuser)
    }
    return (
        <div >
           <div className='px-30 mx-25'>
           <h2 className='text-orange-600'>Update Name: {store.servicename}</h2>
            <form onSubmit={handleupdate}>
            <input onChange={handletext} name='text' type="text" defaultValue={store.text} placeholder="review" className="input input-bordered " /><br/>
            <input className='btn' type="submit"  value="Eidt review"/>
            </form>
            <ToastContainer />
           </div>
        </div>
       
    );
};

export default Update;