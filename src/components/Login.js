import React from "react";
import Header from "./Header";
import { BACKGROUND_URL } from "../utils/constants";

const Login = () => {
  return (
    <div >
      <Header />
      <div>
        <img className="absolute" src={BACKGROUND_URL} alt="bg" />
      </div>
      <form className="w-2/6 absolute p-12 bg-white my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90">
        <h1 className="font-bold text-3xl py-4 text-cyan-900">Sign In </h1>
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
        <button className=" p-4 my-4 w-full bg-cyan-900 text-2xl">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
