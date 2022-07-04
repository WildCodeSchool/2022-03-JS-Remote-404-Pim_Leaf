import React from "react";
import ReactDOM from "react-dom";
import UserExport from "./contexts/UserContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserExport.ContextProvider>
      <App />
    </UserExport.ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
