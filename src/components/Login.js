import React from "react";
import Header from "./Header";
import bg1 from "./images/bg1.jpg";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import { auth } from "../utils/firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userIcon from "./images/userIcon.png";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [Errormessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //first validate the data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    //if there is a message ( i.e msg is not null) that means it is not valid (if message =null then no error)
    //we want to return from here if error occurs
    if (message) return;

    //Sign Up logic

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate('/browse')
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {userIcon},
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
               
              );
              // Profile updated!
              navigate('/browse')
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute h-screen w-screen" src={bg1} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-2/6 absolute p-12 bg-white my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-2 text-cyan-900">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-slate-300 text-xl text-cyan-950"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-slate-300 text-xl text-cyan-950"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-slate-300 text-xl text-cyan-950"
        />
        <p className="text-cyan-900 font-bold py-2 text-lg">{Errormessage}</p>

        <button
          className=" p-4 my-2 w-full bg-cyan-900 text-2xl font-bold rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2 text-cyan-900 font-bold text-lg cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New To Fasal? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
