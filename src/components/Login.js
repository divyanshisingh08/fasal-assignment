import React from "react";
import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
// import bg from './images/bg.jpg'
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";

const Login = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [Errormessage, setErrorMessage] = useState(null);

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
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute " src={BACKGROUND_URL} alt="bg" />
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
            className="p-4 my-4 w-full bg-slate-300 text-xl text-cyan-950"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-300 text-xl text-cyan-950"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-300 text-xl text-cyan-950"
        />
        <button
          className=" p-4 my-4 w-full bg-cyan-900 text-2xl font-bold"
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
