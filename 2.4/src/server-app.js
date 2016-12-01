import Express from "express";
import path from "path";
import React from "react";
import {renderToString} from "react-dom/server";
import { match, RouterContext } from "react-router";
import routes from "./components/routing/routes";


const app = new Express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(Express.static(path.join(__dirname, "public")));


app.get("*", function(req, res) {
    match({routes, location: req.url}, function(error, redirectLocation, renderProps) {
        if (error) {
            return res.status(500).send(error.message);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (renderProps) {
            let html = renderToString(<RouterContext {...renderProps} />);

            return res.render("guitar-page", {html});
        }

        return res.status(404).send("Not Found");
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, error => {
    if (error) {
        return console.error(error);
    }

    console.log("Production Express server running at localhost: " + PORT);
});