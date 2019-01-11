import React, { Component } from 'react';
import homer from "../../img/homer-logo.png";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        console.log(this);
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"><img id="homer-logo" src={homer} alt="Homer logo" />
                <a className="navbar-brand" id="simpsons-title" href="/" onClick={this.props.NavReset}>The Simpsons Clicky Game</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="navbar-brand animated rubberBand" id="instructions">Click on an image to begin! {this.props.rightWrong}</span>
                        </li>
                        <li className="nav-item">
                            <span className="navbar-brand" id="score">Score: {this.props.currentScore} | Top Score: {this.props.topScore}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;