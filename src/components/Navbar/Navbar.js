import React, { Component } from 'react';
import homer from "../../img/homer-logo.png";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary"><img id="homer-logo" src={homer} alt="Homer logo" />
                <a className="navbar-brand" id="simpsons-title" href="/clicky-game">The Simpsons Clicky Game</a>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="navbar-brand animated rubberBand" id="instructions">Click on an image to begin!</span><span className="animated rubberBand" id="message">{this.props.message}</span>
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