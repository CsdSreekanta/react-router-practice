import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    console.log(friend)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data =>setFriend(data))
    },[friendId])
    return (
        <div className="flex justify-center items-center">
            <div className='friendDetail border-2 border-red-400 p-4 shadow-lg rounded-lg w-1/3 mt-4'>
           
         
           <h1>This is Detail about Friend: {friendId}</h1>
           <h1>Name: {friend.name}</h1>
           <h1>Website: {friend.website}</h1>
           <h1>Email: {friend.email}</h1>
           <h1>Phone: {friend.phone}</h1>
           <h1>City: {friend.address?.city}</h1>
          
         
       </div>
        </div>
    );
};

export default FriendDetail;