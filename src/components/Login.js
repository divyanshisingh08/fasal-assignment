import React from "react";
import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";
// import bg from './images/bg.jpg'
import { useState } from "react";

const Login = () => {

  const [isSignInForm,SetIsSignInForm]=useState(true)

  const toggleSignInForm=()=>{
    SetIsSignInForm(!isSignInForm) ;
  }
  return (
    <div >
      <Header />
      <div>
        <img className="absolute " src={BACKGROUND_URL} alt="bg" />
      </div>
      <form className="w-2/6 absolute p-12 bg-white my-24 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
        <h1 className="font-bold text-3xl py-2 text-cyan-900">{isSignInForm?"Sign In": "Sign Up" }</h1>
      { !isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-slate-300 text-xl"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-300 text-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-300 text-xl"
        />
        <button className=" p-4 my-4 w-full bg-cyan-900 text-2xl">{isSignInForm?"Sign In": "Sign Up" }</button>
        <p className="py-2 text-cyan-900 font-bold text-lg cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New To Fasal? Sign Up Now": "Already Registered? Sign In Now" }</p>
      </form>
    </div>
  );
};

export default Login;
