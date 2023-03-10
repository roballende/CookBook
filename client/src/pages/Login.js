import { useState } from "react";
import FormSignIn from "../components/FormSignIn";
import FormSignUp from "../components/FormSignUp";
import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const { setUser } = useAuthContext()

  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <div className="p-6 w-80 m-auto">
          <h3 className="text-3xl text-center py-8">Welcome Back!</h3>
          <FormSignIn onLogin={setUser} />
          <hr className="solid"/>
          <p>
            Not A User? Become One. &nbsp;
            <button className="underline" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="p-6 w-80 m-auto">
          <h3 className="text-3xl text-center py-8">Join Us!</h3>
          <FormSignUp onLogin={setUser} />
          <hr className='solid'/>
          <p>
            Previous User? &nbsp;
            <button className='underline' onClick={() => setShowLogin(true)}>
              Sign In
            </button>
          </p>
        </div>
      )}
    </>
  );
}


export default Login;