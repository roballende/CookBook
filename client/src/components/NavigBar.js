import React from "react";
import { Link } from 'react-router-dom';
import {  useAuthContext } from "../contexts/AuthContext";

function NavigBar() {
    const { setUser } = useAuthContext()

  function handleLogoutClick() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav>
        <div>
            <Link to= "/home">Home</Link> &nbsp;
            <Link to="/recipes">Find New Recipes</Link> &nbsp;
            <Link to="/user_recipes">Cookbook</Link> &nbsp;
            <Link to="/recipes/new">Create Recipe</Link> &nbsp;
            <Link to="/users">Other Users</Link> &nbsp;
            <Link onClick={handleLogoutClick}>Logout</Link> &nbsp;
        </div>
    </nav>
  );
}


export default NavigBar;