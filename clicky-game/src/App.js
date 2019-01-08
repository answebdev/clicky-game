import React, { Component } from 'react';
// import logo from './yin-yang.png';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import './App.css';


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
        <Jumbotron />
        <Card />

      </div>
    )
  }
}

export default App;
