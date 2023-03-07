import { useState } from "react";
import FormSignIn from "../components/FormSignIn";
import FormSignUp from "../components/FormSignUp";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <>
          <h3>Welcome Back!</h3>
          <FormSignIn onLogin={onLogin} />
          <hr className="solid"/>
          <p>
            Not A User? Become One. &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <h3>Join Us!</h3>
          <FormSignUp onLogin={onLogin} />
          <hr class='solid'/>
          <p>
            Previous User? Sign In. &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </p>
        </>
      )}
    </>
  );
}


export default Login;