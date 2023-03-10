import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import NavigBar from '../components/NavigBar'

function Home() {
    const { user } = useAuthContext()

    return <>
        <NavigBar />
        <h1 className="text-3xl text-center p-20">Welcome back {user?.username} </h1>
        <div className='columns-3'>
            <img  src="https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg" />
            <img  src="https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg" />
            <img  src="https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg" />
        </div>
        </>
   
}

export default Home