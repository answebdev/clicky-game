import React, { Component } from 'react';
// import logo from './yin-yang.png';
import './App.css';
import Navbar from './components/Navbar';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Clicky Game coming soon!
//           </p>
//         </header>
//       </div>
//     );
//   }
// }


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

      </div>
    );
  }
}

export default App;
