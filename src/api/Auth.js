export const setAuthToken = (user) =>{
    const currend = {
        email: user.email
    }

     // jwt
     fetch('http://localhost:5000/jwt', {
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
        //  navigate(from, {replace: true})
    })
}