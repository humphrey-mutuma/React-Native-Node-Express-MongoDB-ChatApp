import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export function UserWrapper({ children }) {
  const [userData, setUserData] = useState(null);
  const [bearerToken, setBearerToken] = useState(null);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        // value previously stored
        setBearerToken(token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
    if (bearerToken !== null) {
      axios
        .get(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users`, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

// custom user hook
export function useUserContext() {
  return useContext(UserContext);
}
