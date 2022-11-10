import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/Auth';
import { AuthContext } from '../../contexts/authprovider/Authprovider';

const Signup = () => {
    const {createuser} = useContext(AuthContext)
    const handlesignup = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value

        createuser(email, password,photo)
        .then(result => {
            const user = result.user;
            console.log(user)
            setAuthToken(user);
           
        })
        form.reset()
        .catch(err => console.error(err));

    }
    return (
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          {/* <div className="text-center lg:text-left">
           
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div> */}
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">SignUp</h1>
            <form onSubmit={handlesignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input type="text" name="photo" placeholder="photo" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                  <input  className="btn btn-primary" type="submit" name="" value="Sign Up"/>
                
              </div>
            </form>
            <p className='text-center'>Already have an account <Link className='text-orange-600 font-bold' to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Signup;