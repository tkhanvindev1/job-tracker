import { useEffect, useState, createContext } from "react";
import { get, post } from "../services/authService";
import axios from "axios";

const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const setTimedMessage = (newMessage) => {
    setMessage(newMessage);
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        message,
        user,

        setIsLoading,
        setMessage,
        setUser,
        setTimedMessage,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
