import React, { Component } from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Footer from './components/Footer/Footer';
import characters from './characters.json';
import swal from 'sweetalert';
import './App.css';

// Shuffle the cards
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set the state
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: []
  };

  // Set the click handler for when user clicks on the card
  clickHandler = id => {
    let instructionsText = document.getElementById("instructions");
    instructionsText.textContent = "";
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.Reset();
    }
  };

  // Handle the increment that adds one each time a different card is clicked
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 12) {
      this.setState({
        currentScore: 0,
        clicked: []
      }, function () {
        this.setState({
          clicked: []
        })
      });
      swal("Woohoo!", "Good job! You win!");
    }
    this.handleShuffle();
  };

  // Reset the score to 0
  Reset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    swal("D'oh!", "Sorry, you lose.");
    this.handleShuffle();
  };

  // Reset by clicking Navbar title
  NavReset = (e) => {
    e.preventDefault();
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  // Handle the shuffling of cards
  handleShuffle = () => {
    let shuffledCards = shuffleCards(characters);
    this.setState({ characters: shuffledCards });
  };

  // Render the components
  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron />
        {this.state.characters.map(characters => (
          <Card
            key={characters.id}
            clickHandler={this.clickHandler}
            handleShuffle={this.handleShuffle}
            id={characters.id}
            image={characters.image}
          />
        ))}
        <Footer />
      </div>
    )
  }
}

export default App;