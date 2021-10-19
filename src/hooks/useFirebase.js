import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () =>{
    const [user, setUser] = useState({})
    const [ isLoading, setIsLoading] = useState(true);
    const auth = getAuth();













    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
      }
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
      }
      const handleResistration = e =>{
        e.preventDefault();
        console.log(email, password)
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }   
        isLogin? processLogin(email, password) : resisterNewUser(email, password)
      }
      const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user
          console.log(user)
          setError('')
        })
        .catch(error =>{
          setError(error.message)
        })
      }
      const resisterNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          setError('');
          setUserName();

        })
        .catch(error =>{
          setError(error.message);
        })
      }
      const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName: name})
        .then(result =>{
    
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
    return { user, isLoading, signInUsingGoogle, logOut, handleNameChange, handleEmailChange,handlePasswordChange,handleResistration,error,toggleLogin,isLogin}
}

export default useFirebase;