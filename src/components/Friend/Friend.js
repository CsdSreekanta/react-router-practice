import React from 'react';
import { useNavigate } from "react-router-dom";


const Friend = ({friend}) => {
    const {name, username, id} = friend
    let navigate = useNavigate()
    const showButton =()=>{
// const path=`/friends/:${id}`
// navigate(path)
navigate(`/friends/:${id}`)
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={showButton} className='button bg-gray-300 p-2 rounded'>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;