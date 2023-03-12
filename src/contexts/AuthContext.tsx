import React, { createContext, useState } from "react";

export interface AuthContextData {
  signed: boolean;
  login(): void
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<boolean>(true);

  function login() {
    setAuth(!auth);
    console.log(auth)
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!auth,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;