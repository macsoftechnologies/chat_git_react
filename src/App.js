// <<<<<<< HEAD
import React from "react";
import "./components/App.css";
import ThemeContextProvider from "./context/ThemeContextProvider";
import MessageContextProvider from "./context/MessageContextProvider";
import RouterLayout from "./pages/RouterLayout";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <MessageContextProvider>
          <RouterLayout />
        </MessageContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
