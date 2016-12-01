import React from "react";

export default class App extends React.Component {
    render() {
        return (
            <div className="container app-container">
                {this.props.children || "This is the default content"}
            </div>
        );
    }
}