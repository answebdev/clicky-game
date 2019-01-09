import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <br />
                    <div id="inner-jumbo">
                        <h1 className="display-4" id="jumbo-title">The Simpsons Clicky Game</h1>
                        <p className="lead" id="jumbo-lead">Click on an image to earn points, but don't click on any more than once!</p>
                        <br />
                    </div>
                </div>
            </div>
        );
    };
}

export default Jumbotron;