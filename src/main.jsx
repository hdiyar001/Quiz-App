import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ArrayContext from "./Ressources/questionArray-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ArrayContext.Provider value = {{questionArray:questionArray}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ArrayContext.Provider>
);
