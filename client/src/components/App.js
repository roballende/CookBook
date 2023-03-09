import { useState, useEffect } from "react";
import Login from "../pages/Login";
import AllRecipes from '../pages/AllRecipes';
import NavigBar from './NavigBar';
import { Routes, Route } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Cookbook from '../pages/UserRecipes'
import AuthProvider from "../contexts/AuthContext";



function App() {
  return (
    <AuthProvider>
      <div>
        <NavigBar />
        <div className="App">
          <Routes>
            <Route path='home' element={<Home />} />
            <Route path='recipes/new' element={<NewRecipe />} />
            <Route path='recipes' element={<AllRecipes />} />
            <Route path='user_recipes' element={<Cookbook />} />
            <Route path='users' element={<Users/>} />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );



}

export default App;
