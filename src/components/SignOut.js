import React from "react";
import { auth } from "../firebase.js";
import { Button } from "@material-ui/core";

function SignOut() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: "10",
      }}
    >
      <Button
        class="button"
        style={{
          margin: "15px",
          padding: "20px",
          fontSize: "15px",
          borderRadius: "16px",
          fontWeight: "600",

          backgroundColor: "#303234",
        }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
}

export default SignOut;
