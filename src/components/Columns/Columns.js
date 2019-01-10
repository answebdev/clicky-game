// import React, { Component } from 'react';
import React from "react";

// class Columns extends Component {
//     render() {
//         return (
//             <div className="col-md-3">
            
//             </div>
//         )
//     }
// }

const Columns = props => <div className="col-md-3">{props.children}</div>;

export default Columns;