import { useState, useEffect } from "react";
import Login from "../pages/Login";
import UserRecipes from '../pages/AllRecipes';
import NavigBar from './NavigBar';
import { Routes, Route } from 'react-router-dom';
import NewRecipe from '../pages/NewRecipe';
import Cookbook from '../pages/Cookbook';
import Home from '../pages/Home';
import Users from '../pages/Users';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((sessionUser) => setUser(sessionUser))
      }
    });
  }, []);
  
  if (!user) return <Login onLogin = {setUser} />

  return (
    <div>
      <NavigBar user={user} setUser={setUser}/>
      <div className="App">
        <Routes>
          <Route path='home' element={<Home user={user}/>} />
          <Route path='newrecipe' element={<NewRecipe user={user}/>} />
          <Route path='userrecipes' element={<UserRecipes user={user}/>} />
          <Route path='cookbook' element={<Cookbook/>} />
          <Route path='users' element={<Users/>} />
          <Route path='/' element={<Login onLogin = {setUser}/>} />
        </Routes>
      </div>
    </div>
  );



}

export default App;
