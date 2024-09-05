import React, { useState } from "react";

const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "itz_abdulfatai",
    password: "passkey1",
    securityQuestions: [
      {
        quesstion: "where did you grow?",
        answer: "inside life",
      },
      {
        question: "what is your middle name?",
        answer: "owolabi",
      },
    ],
  });

  const [loggedIn, setLoggedIn] = useState(false);
  // const [subscribed, setSubscribed]

  return (
    // i think all data and functions will be exported below
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
