import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Initialize as a boolean

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false); // Reset after the operation
    }
  };

  useEffect(() => {
    isLoggedIn(); // Invoke the function
  }, []);

  return (
    <AuthContext.Provider value={{ token, isLoading, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
