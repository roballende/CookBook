import React from "react";
import { Link } from 'react-router-dom';

function NavigBar({ user, setUser }) {
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
            <Link to="/userRecipes">All Recipes</Link> &nbsp;
            <Link to="/userRecipes">Your Recipes</Link> &nbsp;
            <Link to="/newRecipe">Create Recipe</Link> &nbsp;
            <Link to="/cookbook">Cookbook</Link> &nbsp;
            <Link to="/users">Other Users</Link> &nbsp;
            <Link onClick={handleLogoutClick}>Logout</Link> &nbsp;
        </div>
    </nav>
  );
}


export default NavigBar;