import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export default function useSignup() {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log('user signup ', response.user)
            dispatch({ type: 'LOGIN', payload: response.user })
        })
        .catch((error) => {
            setError(error.message);
        });
  }

  return { error, signup }
}
