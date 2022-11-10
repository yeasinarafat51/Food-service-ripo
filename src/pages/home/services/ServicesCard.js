import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const { _id,img, price, name, description} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img className='w-full h-100' src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>$ {price}</p>
    <p>{description.slice(0, 100)}</p>
    <div className="card-actions justify-end">
     <Link to={`/checkout/${_id}`}>
     <button className="btn btn-primary">Deatail</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;