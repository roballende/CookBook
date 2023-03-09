import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';


function Home() {
    const { user } = useAuthContext()

   return <h1> Welcome back {user.username} </h1>
}

export default Home