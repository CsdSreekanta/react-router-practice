import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const Friend = ({friend}) => {
    const {name, username, id} = friend
const navigate = useNavigate()
    const handleButton=()=>{
        const path = `/friend/${id}`
        navigate(path)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Link className='underline mr-3' to={`friend/${id}`} >{friend.name}</Link>
            <button onClick={handleButton} className='button bg-gray-300 p-2 rounded'>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;