import axios from "axios";
import { createContext } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const signup = async (name, username, password) => {
    const response = await axios.post("http://localhost:3000/api/auth/signup", {
      name,
      username,
      password,
    });

    if (response.status === 200) {
      return true;
    }

    return false;
  };

  const signin = async (username, password) => {
    const response = await axios.post("http://localhost:3000/api/auth/signin", {
      username,
      password,
    });

    if (response.status === 200) {
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
      console.log(user);
      return true;
    }

    return false;
  };

  const signout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
