import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderPros {
    children: React.ReactNode;
}

export const AuthProvider : React.FC<AuthProviderPros> = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false);

    return(
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};