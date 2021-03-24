import React, { useState } from 'react';
import axios from 'axios'

function Login(props) {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setCredentials({...credentials, [name]: value})
    }
    
    const login = e => {
        e.preventDefault()

        axios
        .post('http://LocalHost:5000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/friends');
            console.log(res)
        })
        .catch(err => {
            console.log('Error: ', err.response)
        })
    }

    return (
        <>
        <div className='loginDiv'>
        <h1>Login</h1>
            <form onSubmit={login}>
                <label> UserName:
                    <input type='text' 
                    name='username' 
                    value={credentials.username}
                    onChange={handleChange}/>
                </label>
                <label> Password:
                    <input type='text' 
                    name='password' 
                    value={credentials.password}
                    onChange={handleChange}/>
                </label>
                <button>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;