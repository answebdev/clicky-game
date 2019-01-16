import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span id="footer-text">The Simpsons Clicky Game &nbsp;<i id="react" class="fab fa-react"></i></span>
                </div>
            </footer>

        )
    }
}

export default Footer;
