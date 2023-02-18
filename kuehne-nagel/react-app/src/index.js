// CSS IMPORTS
import "./index.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/css/ShipmentsTable.css"; //For styling the table
//  LIBRARIES
import React from "react";
import ReactDOM from "react-dom/client";
//PAGE IMPORTS
import App from "./App";
import ShipmentsTable from "./pages/ShipmentsTable";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //ROOTS
  <React.StrictMode>
    <App />
    <ShipmentsTable />
  </React.StrictMode>
);
