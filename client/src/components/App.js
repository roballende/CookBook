import { useState, useEffect } from "react";
import Login from "../pages/Login";
import AllRecipes from '../pages/AllRecipes';
import { Routes, Route } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';
import Home from '../pages/Home';
import Users from '../pages/Users';
import Cookbook from '../pages/UserRecipes'
import AuthProvider from "../contexts/AuthContext";
import { Recipe } from "../pages/Recipe";
import { Profile } from "../pages/Profile";

import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

const pubnub = new PubNub({
  publishKey: 'pub-c-ebd529c1-b353-4bf0-ad9e-2cad24822c77',
  subscribeKey: 'sub-c-59f77cc3-0318-40e5-9c19-3e6e16c9414d',
  uuid: 'myUniqueUUID'
});


function App() {
  return (
    <AuthProvider>
      <PubNubProvider client={pubnub}>
        <div>       
          <div className="App">
            <Routes>
              <Route path='home' element={<Home />} />
              <Route path='recipes/new' element={<NewRecipe />} />
              <Route path='recipes' element={<AllRecipes />} />
              <Route path='user_recipes' element={<Cookbook />} />
              <Route path='users' element={<Users/>} />
              <Route path='recipes/:id' element={<Recipe />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/' element={<Login />} />
            </Routes>
          </div>
        </div>
      </PubNubProvider>
    </AuthProvider>
  );



}

export default App;
