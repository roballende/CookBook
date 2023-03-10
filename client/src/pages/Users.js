import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigBar from '../components/NavigBar';
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
        <NavigBar />
        <div className="p-6">
            <h1 className='text-3xl text-center pb-6'></h1>

            <table className="table-recipes w-full">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th className='text-center'>Cooked dishes</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {otherUsers.map(user => {
                        return <tr key={user.id} className='list-userl'>
                            <td>{user.username}</td>
                            <td className='text-center'>{user.cooked_dishes_count}</td>
                            <td>
                                <NavLink to={`/user_recipes?user_id=${user.id}`} title='View Cookbook'>
                                    <img className="icon mr-2" src='/img/icon-cookbook.svg' />
                                </NavLink>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Users;