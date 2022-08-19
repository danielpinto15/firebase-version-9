import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const login = (email, password) => {
      setError(null)
      signInWithEmailAndPassword(auth, email, password)
          .then((response) => {
              console.log('user logged in ', response.user)
              dispatch({ type: 'LOGIN', payload: response.user})
          })
          .catch((error) => {
              setError(error.message);
          });
    }
  
    return { error, login }
}
