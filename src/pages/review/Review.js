import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/authprovider/Authprovider';
import Usetitle from '../../hooks/Usetitle';
import Reviewrow from './Reviewrow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
    const {user, logout} = useContext(AuthContext)
    const [review, setreview] = useState([])
    Usetitle('Home')

    useEffect(() =>{
        if(!user?.email){
            return 
        }
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
               return logout()

            }
            
           return res.json()})
        .then(data => setreview(data))
    },[user?.email, logout])

    const handledelete = id =>{
        const proceed =window.confirm('Are cancel review');
        
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    // alert('deleted success')
                    toast("delete success");
                    const remaining = review.filter(odr => odr._id !== id);
                    setreview(remaining)
                    
                }
            })
        }

    }


    return (
        <div>
            
            <h2>you have {review?.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>
        <label>
            <h1>Delete</h1>
          </label>
        </th>
        <th>Img</th>
        <th>Name</th>
        <th>Price</th>
        <th>Review</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
     
      {
        review.map(order => <Reviewrow
        key={order._id}
        order={order}
        handledelete={handledelete}
        ></Reviewrow>)
      }
     
    </tbody>
    
   
    
  </table>
</div>
<ToastContainer />
        </div>
    );
};

export default Review;