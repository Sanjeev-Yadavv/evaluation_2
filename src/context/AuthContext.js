import {createContext , useState, useContext} from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        isAuthanticated: false,
        token: null,
        email: null
    })

    const login = (token,email) =>{
        setAuthState({isAuthanticated: true, token, email})
    };

    return (
        <AuthContext.Provider value {{authState, login,logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);

