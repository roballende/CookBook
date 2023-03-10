import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {  useAuthContext } from "../contexts/AuthContext";
import { usePubNub } from 'pubnub-react';

function NavigBar() {
    const pubnub = usePubNub();

    const { setUser } = useAuthContext()
    const navigate = useNavigate()

    const [newRecipe, setNewRecipe] = useState('')

    const [channels] = useState(['recipe']);
  
    const handleMessage = event => {
      setNewRecipe(event.message.recipe.title);      
    };

    useEffect(() => {
      if(newRecipe) alert(`${newRecipe} recipe added`)
    }, [newRecipe])

    useEffect(() => {      
      pubnub.addListener({ message: handleMessage });
      pubnub.subscribe({ channels });
    }, []);
  

  function handleLogoutClick() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate('/')
      }
    });
  }

  return (
    <nav className="navbar p-4 order-last md:order-none items-center flex-grow w-full md:w-auto md:flex mt-2 md:mt-0">
        <Link className="home" to= "/home">Home</Link> &nbsp;
        <Link to="/recipes">Find New Recipes</Link> &nbsp;
        <Link to="/user_recipes">Cookbook</Link> &nbsp;
        <Link to="/recipes/new">Create Recipe</Link> &nbsp;
        <Link to="/users">Other Users</Link> &nbsp;
        <Link to="/profile">Profile</Link> &nbsp;
        <Link onClick={handleLogoutClick}>Logout</Link> &nbsp;
    </nav>
  );
}


export default NavigBar;