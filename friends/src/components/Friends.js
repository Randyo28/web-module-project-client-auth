import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWlAuth';

function Friends(props) {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('http://Localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => {
            console.log('No friends Here ', err.response)
        })
    },[])


    return (
        <div className="friends-image">
            {friends.map(friend => {
               return  (
                <div className='friend'>
                    <h1>Name: {friend.name}</h1>
                    <h1>Age: {friend.age}</h1>
                    <h1>Id: {friend.id}</h1>
                    <h1>Email: {friend.email}</h1>
                </div>
               )
            })}
        </div>
    );
}

export default Friends;