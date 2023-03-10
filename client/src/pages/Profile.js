import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavigBar from '../components/NavigBar'
import { useAuthContext } from '../contexts/AuthContext'

export const Profile = () => {
    const navigate = useNavigate()

    const { user, setUser } = useAuthContext();

    const [username, setUsername] = useState('')

    useEffect(() => {
        if (user?.username) setUsername(user.username)
    }, [user?.username])

    const [errors, setErrors] = useState([]);

    const onNameChange = (e) => {
        const val = e.target.value;
        setUsername(val);
    }

    const onUpdateProfile = () => {
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => setUser(user));
            } else {
              r.json().then((flaw) => setErrors(flaw.errors));
            }
          });
    }

    const onDeleteProfile = () => {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            }
          }).then((r) => {
            if (r.ok) {
              r.json().then(() => {
                setUser(null)
                navigate('/')
              });
            } else {
              r.json().then((flaw) => setErrors(flaw.errors));
            }
          });
    }

  return (
    <>
        <NavigBar />
        <div className="p-6 w-96 m-auto">
            <h3 className="text-3xl text-center py-8">Profile</h3>
            {errors.map((err) => (
                <span key={err}>{err} &nbsp;</span> 
            ))}
            <div className='row mb-4'>
                <label htmlFor="username">Change username:</label> &nbsp;
                <input 
                    onChange={onNameChange} 
                    value={username} 
                    placeholder="username"  
                    className='border-2 p-2 w-full'
                />
            </div>
            <div className='row mb-4'>
                <button type='button' className='p-2 border-2 border-black w-full' onClick={onUpdateProfile}>Save</button>
            </div>
            <div className='row mb-4'>
                <button type='button' className='p-2 border-2 border-red-700 w-full'  onClick={onDeleteProfile}>Delete my profile</button>
            </div>

        </div>
    </>
  )
}
