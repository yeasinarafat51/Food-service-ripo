import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authprovider/Authprovider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const handlelogout =() =>{
        logout()
        .then()
        .then()
    }

    const items = <>
    <li className='font-semibold'><Link to ='/'>Home</Link></li>
   {
    user?.email ?
    <>
    <li className='font-semibold'><Link to ='/orders'>Review</Link></li>
    <li className='font-semibold'><Link to ='/add'>Add Service</Link></li>
    <li className='font-semibold'>
        <button onClick={handlelogout} className='btn-ghost'>Sign Out</button>
        </li>
    </>
    :
     <li className='font-semibold'><Link to ='/login'>Login</Link></li>
   }
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {items}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {items}
          </ul>
        </div>
        <div className="navbar-end">
        {/* <button className="btn btn-outline btn-warning">Blog</button> */}
        {/* <li className='font-semibold'><Link to ='/blog'>Blog</Link></li> */}
        <Link to="/blog"><button className="btn btn-outline btn-warning">Blog</button></Link>
        </div>
      </div>
    );
};

export default Header;