import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/Auth';
import { AuthContext } from '../../../contexts/authprovider/Authprovider';

const Sociallogin = () => {
    const {googleSignin} = useContext(AuthContext);
    const handlegoogle = () =>{
        googleSignin()
        .then(result =>{
            const user =result.user;
            console.log(user);
            setAuthToken(user);
            
        })
        .catch(err => console.error(err));
    }
    return (
        <div>
            <p className='text-center'>
                <button onClick={handlegoogle} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default Sociallogin;