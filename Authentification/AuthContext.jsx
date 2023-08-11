import { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/*Ce fichier me permet de créer un hook personnalisé qui va géré le système d'authentification
de l'application, via le createContext et le useContext.
En enregistrant le token dans le localStorage ainsi que dans le state, me permet d'avoir accès
à ce dernier n'importe quand sans ce soucier du rafraichissement de la page ou d'un changement
de page
*/

const AuthContext = createContext(); //création du contexte d'authentification

//le provider qui va englober mon application et permettre l'usage du hook personnaliser partout où il faut
export function AuthProvider({ children }) {
  const [token, setToken] = useState(getToken || "");
  const [userID, setUserID] = useState(getUserId || "");

  //fonction pour enregistrer le token dans le storage
  async function getToken() {
    try {
      const newToken = await AsyncStorage.getItem("token");

      if (newToken) {
        setToken(newToken);
      }
    } catch (error) {
      console.log("Erreur avec le token et/ou le userId " + error);
    }
  }

  //fonction pour enregistré le userId
  async function getUserId() {
    try {
      const newUserId = await AsyncStorage.getItem("userId");

      if (newUserId) {
        setUserID(newUserId);
      }
    } catch (error) {
      console.log("Erreur avec le token et/ou le userId " + error);
    }
  }

  //fonction pour récupéré le token dans le local storage
  async function updateToken(newToken, newId) {
    try {
      setToken(newToken);
      setUserID(newId);
      AsyncStorage.setItem("token", newToken);
      AsyncStorage.setItem("userId", newId);
    } catch (error) {
      console.log("Erreur updateToken " + error);
    }
  }
  return (
    <AuthContext.Provider
      value={{ token, setToken, userID, setUserID, updateToken }}
    >
      {children}
    </AuthContext.Provider>
  );
}

//création d'un hook personnaliser pour utiliser mon context partout où j'en ai besoin
export function useAuth() {
  return useContext(AuthContext);
}
