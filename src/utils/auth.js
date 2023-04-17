import { useState, useContext, createContext } from "react";
import { Navigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ( {children} ) => {
	const [user, setUser] = useState(null);

	const login = (username) => {
		setUser(username);
	}

	const logout = () => {
		setUser(null);
	}

	return (
		<AuthContext.Provider value={{user, login, logout}}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
}

export const RequireAuth = ( {children} ) => {
	const auth = useContext(AuthContext);

	if (!auth.user)
	{
		return <Navigate to='/login' />
	}

	return children;
}
