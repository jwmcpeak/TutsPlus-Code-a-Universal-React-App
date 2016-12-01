import React from "react";
import {Router, browserHistory, Route, IndexRoute} from "react-router";
import App from "../pages/app";
import Home from "../pages/home";
import Guitar from "../pages/guitar";

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="guitar/:guitarId" component={Guitar} />
    </Route>
);

export default routes;