import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../context/MessageContextProvider";

function Home() {
  const messageContext = useContext(MessageContext);
  const navigate = useNavigate();
  const login = () => {
    if (true) {
      navigate(messageContext.id);
    } else {
      navigate("/");
    }
  };
  return (
    <div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Home;
