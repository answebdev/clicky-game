import React, { Component } from 'react';
// import logo from './yin-yang.png';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import characters from './characters.json';
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


function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  clickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.Reset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "Congratulations! You win!" });
    }
    this.handleShuffle();
  };

  Reset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Oi!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(characters);
    this.setState({ friends: shuffledCards });
  };

  // handleClick = () => {
  //   // alert("Card clicked!");
  //   console.log(characters);
  // }



  render() {
    return (
      <div>
        <Navbar
          // title="Simpsons Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Jumbotron />

        {this.state.characters.map(characters => (
          <Card
            key={characters.id}
            clickHandler={this.clickHandler}
            handleIncrement={this.handleIncrement}
            Reset={this.Reset}
            handleShuffle={this.handleShuffle}
            id={characters.id}
            image={characters.image}
          />
        ))}


      </div>
    )
  }
}

export default App;
