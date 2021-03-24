import axios from 'axios';
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWlAuth';

function NewFriend(props) {

    const [friendValues, setFriendValues] = useState({
        name: '',
        id: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setFriendValues({...friendValues, [name]: value})
    }

    const addFriend = (e) => {
        e.preventDefault()

        axiosWithAuth()
        .post('http://Localhost:5000/api/friends', friendValues)
        .then(res => {
            console.log('Success: ', res)
            props.history.push('/protected')
        })
        .catch(err => {
            console.log('Error: ', err.response)
        })

    }

    return (
        <div className='newFriendDiv'>
        <h1>Add New Friend</h1>
            <form className="friendForm" onSubmit={addFriend}>
                <label> Name:
                    <input type='text' 
                    name='name' 
                    value={friendValues.name}
                    onChange={handleChange}/>
                </label>
                <label> Id:
                    <input type='number' 
                    name='id' 
                    value={friendValues.id}
                    onChange={handleChange}/>
                </label>
                <label> Age:
                    <input type='number' 
                    name='age' 
                    value={friendValues.age}
                    onChange={handleChange}/>
                </label>
                <label> Email:
                    <input type='email' 
                    name='email' 
                    value={friendValues.email}
                    onChange={handleChange}/>
                </label>
                <button>Create Friend</button>
            </form>
        </div>
    );
}

export default NewFriend;