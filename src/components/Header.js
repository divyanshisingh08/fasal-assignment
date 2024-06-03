import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../utils/firbase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import userIcon from './images/userIcon.png'

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className=" absolute px-8 py-2 z-10 w-screen font-bold text-white flex  justify-between ">
      <div>
        <Link to="/">MovieFlix</Link>
      </div>

      {user && (
        <div className="flex p-2">
          <img
            className=" user-image w-12 h-12"
            src={userIcon}
            alt="user-icon"
          />
          <button
            className="font-bold text-white px-1 pb-2 text-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
