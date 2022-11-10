import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/Authprovider';
import Reviewrow from '../review/Reviewrow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const { _id,name,price,img,description } = useLoaderData();
    const {user} = useContext(AuthContext)

    const handlereview = event =>{
        event.preventDefault();
        const form = event.target;
        // const names = user?.name || 'noname';
        const names = `${form.name.value}`
        const email = user?.email || 'unregistered';
        const text = form.text.value;
        const img = form.img.value;

        const review = {
            service:_id,
            servicename:name,
            price,
            customer:names,
            email,
            text,
            img,
        }

        fetch('https://server11.vercel.app/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                // alert('review success')
                toast("review success");
                form.reset()
            }
        })
        .catch(er => console.error(er));

    }
    return (
       <div>
         <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img className='w-full h-100' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>$ {price}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
           {/* <Link to={`/checkout/${_id}`}>
           <button className="btn btn-primary">Deatail</button>
           </Link> */}
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handlereview}>
        <h2 className='text-4xl'>You order: {name}</h2>
                <h4 className='text-3xl'> Price:{price}</h4>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-10'>
        <input name='name' type="text" placeholder="Name"  className="input input-bordered " />
        <input name='email' type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered " readOnly />
        <input name='text' type="text" placeholder="review" className="input input-bordered " />
        <input name='img' type="img" placeholder="img" className="input input-bordered " />
        </div>
        <input className='btn' type="submit"  value="Place review"/>
        </form>
       
      </div>
      <ToastContainer />
       </div>
    );
};

export default Checkout;