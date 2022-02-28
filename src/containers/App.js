import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../components/Game'
  
class App extends React.Component {
  render() {
    return (
      <>
      <h1>Tic-tac-toe</h1>
      <h4>Have fun playing😀</h4>
      <Game />
      </>
    );
  }
}

export default App;