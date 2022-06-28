import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SimpleLog = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handelGoogle = (e) => {
    // e.perventDefoult();
    console.log("Test your click");
  };
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-cyan-900 p-3 font-bold rounded-lg text-white"
      >
        Google
      </button>
    </div>
  );
};

export default SimpleLog;
