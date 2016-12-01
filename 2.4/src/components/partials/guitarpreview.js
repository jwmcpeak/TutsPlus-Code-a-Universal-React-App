import React from "react";
import {Link} from "react-router";

export default class GuitarPreview extends React.Component {
    render() {
        return (
            <div className="guitar-preview">
                <h3>
                    <Link to={"/guitar/" + this.props.id}>
                        {this.props.name} <small>{this.props.manufacturer}</small>
                    </Link>
                </h3>
                <img className="img-responsive" src={"img/" + this.props.image} />
            </div>
        );
    }
}