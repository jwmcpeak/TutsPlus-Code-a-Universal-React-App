import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./components/routing/AppRoutes";


window.addEventListener("load", (e) => {
    ReactDOM.render(<AppRoutes />, document.getElementById("guitar-app"));
});