import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/authprovider/Authprovider';
import Usetitle from '../../hooks/Usetitle';
import Sociallogin from '../shared/sociallogin/Sociallogin';

const Login = () => {
    Usetitle('login')
    const {login} =useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from.pathname || '/servic';

    const handlelogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result =>{
            const user = result.user;
            

            const currend = {
                email: user.email
            }
            console.log(currend)

            // jwt
            fetch('https://server11.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currend)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('genius-token', data.token);
                 navigate(from, {replace: true})
            })
           
        })
        .catch(error => console.error(error));

    }



    return (
        <div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    {/* <div className="text-center lg:text-left">
     
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl text-center font-bold">Login</h1>
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input  className="btn btn-primary" type="submit" name="" value="Login"/>
          
        </div>
      </form>
      <p className='text-center'>New to delivary <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
      <Sociallogin></Sociallogin>
    </div>
  </div>
</div>
    );
};

export default Login;