import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuthContext = () => {
    const data = useContext(AuthContext)
    return data
}

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
      fetch('/me')
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((sessionUser) => {
            setUser(sessionUser);            
            setLoading(false);
          })
        } else {
            setLoading(false)
            navigate('/') 
        }        
      })      
    }, []);

    if (loading) return 'Loading...'

    return <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;