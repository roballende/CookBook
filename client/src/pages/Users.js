import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';



function Users() {
    const { user } = useAuthContext();
    const [otherUsers, setOtherUsers] = useState([])


    useEffect(() => {
        // safe navigation user && user.id
        if (user?.id) { 
            fetch(`/users/${user.id}/other_users`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })    
            .then((r) => {
                if (r.ok) {
                    r.json().then((data) => setOtherUsers(data))
                }
            })
        }
    }, [user?.id]);

    console.log('other users', otherUsers)

    return(
        <>
        <h1>Other User Info including:</h1>
        {otherUsers.map(user => {
            return <div key={user.id}>
                 <ul>username: {user.username}</ul>
                    <ul>number of cooked dishes: {user.cooked_dishes_count}</ul>
                    <ul>cookbook icon to view other users' cookbook recipes 
                        <NavLink to={`/user_recipes?user_id=${user.id}`}>Icon</NavLink>
                    </ul>
            </div>
        })}
      
        </>
    )
}

export default Users;