import React, { useContext } from 'react';
import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/Authprovider';

const Reviewrow = ({order,handledelete}) => {
    // const {user} = useContext(AuthContext)
    const { _id,price,email, customer,text,servicename,img} = order

    
    return (
        <tr>
        <th>
          <label>
         <button onClick={() =>handledelete(_id)}> <AiFillDelete></AiFillDelete></button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
             <img src={img} alt=""/>
              </div>
            </div>
            <div>
              <div className="font-bold">{customer}</div>
              <div className="text-sm opacity-50">{servicename}</div>
            </div>
          </div>
        </td>
        <td>
         $ {price}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>review: {text}</td>
        <th>
          <Link to={`/update/${order._id}`}>
          <button className="btn btn-ghost btn-xs">Edit</button>
          
          </Link>
        </th>
      </tr>
      
    );
};

export default Reviewrow;