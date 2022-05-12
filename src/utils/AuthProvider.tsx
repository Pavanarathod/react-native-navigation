import React, { useState } from "react";

type User = null | { userName: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  logOut: () => void;
}>({
  user: null,
  login: () => {},
  logOut: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<null | { userName: string }>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { userName: "Pavan" };
          setUser(fakeUser);
        },
        logOut: () => {
          setUser(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
