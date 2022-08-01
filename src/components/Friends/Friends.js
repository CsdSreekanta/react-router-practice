import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h1> Total Friends: {friends.length}</h1>
            <h1 className="text-2xl">Hello friends how are you</h1>
            <p> Parle kiso taka dar dao</p>
            {
                friends.map(friend=> <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;