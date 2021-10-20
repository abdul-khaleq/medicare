import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState()
    const [ isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
 


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleNameChange = e =>{
        setName(e.target.value)
        console.log(e.target.value)
      }
      const handleEmailChange = e =>{
        setEmail(e.target.value)
        console.log(e.target.value)
      }
      const handlePasswordChange = e =>{
        setPassword(e.target.value)
        console.log(e.target.value)
      }



      const handleResistration = e =>{
        e.preventDefault();
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }   
        resisterNewUser(email, password)
      }
      const handleLogin = e =>{
        e.preventDefault();
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }   
        processLogin(email, password);
      }





      const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setUser(user)
          console.log(user)
          setError('')
          setUserName();
          if(user){
            window.location.href = "/home";
          }
        })
        .catch(error =>{
          setError(error.message)
        })
      }
      const resisterNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          setUser(user)
          console.log(user)
          setError('');
          setUserName();
          if(user){
            window.location.href = "/home";
          }

        })
        .catch(error =>{
          setError(error.message);
        })
        
      }
      const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result =>{
          console.log(result)
          setUser()
        })
      }





    const signInUsingGoogle = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .finally( ()=> setIsLoading(false))
    }
    //ovserve user state change
    useEffect( ()=>{
        const unsubscribed =onAuthStateChanged(auth, user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    },[])
    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then( ()=>{})
        .finally( ()=> setIsLoading(false))
    }
    return { user, isLoading, signInUsingGoogle, logOut, handleNameChange, handleEmailChange,handlePasswordChange,handleResistration,error,handleLogin}
}

export default useFirebase;