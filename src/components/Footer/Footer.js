import React, { Component } from 'react';
// import homer from "../../img/homer-logo.png";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            // <footer className="page-footer">
            //     <div className="footer-copyright">
            //         <div className="container" id="footer-container">
            //             The Simpsons Clicky Game
            //         </div>
            //     </div>
            // </footer>
            <footer className="footer">
                <div className="container">
                    <span id="footer-text">The Simpsons Clicky Game &nbsp;<i id="react" class="fab fa-react"></i></span>
                </div>
            </footer>

        )
    }
}

export default Footer;
