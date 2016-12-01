import React from "react";
import NotFound from "./notfound";
import GuitarData from "../../data/guitars";

export default class Guitar extends React.Component {
    render() {
        const id = this.props.params.guitarId;
        const guitar = GuitarData.find((g) => g.id == id);

        if (!guitar) {
            return <NotFound />
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{guitar.manufacturer} {guitar.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive" src={"../img/"+guitar.image} />
                    </div>
                    <div className="col-md-6">
                        <h3>Description</h3>
                        <ul>
                            <li>Year: {guitar.year}</li>
                            <li>Neck: {guitar.neck}</li>
                            <li>Fingerboard: {guitar.fingerboard}</li>
                            <li>Frets: {guitar.frets}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}