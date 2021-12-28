class Square extends React.Component {
  constructor(props) {
    super(props); // props = properties
    this.state = {
      value:null, //no value
    };
  }
  render() {
    return ( // when the user clicks the square, the square will display an 'x'
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value} 
        
      </button>
      //this.props.value displays the value in the square
    );
  }
}
// class Square extends React.Component {
//render() {
// return (
// <button className="square">
//{this.props.value})
//</button
//}

class Board extends React.Component {
  constructor(props){ // we use  constructor and super to have two child components. OOP
    super(props)
    this.state = {
      squares: Array(9).fill(null), //array has 9 because there are 9 squares
    };
  }
  renderSquare(i) {
    return (
    <Square value={this.state.squares[i]}
    onclick={() => this.handleClick(i)}
    />
    // displays the value as an integer
    );
  }


  render() {
    const status = 'Next player: X';

    return (// renderSquare allows more square
      <div>
        <div className="status">{status}</div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          
        </div>
        
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
// When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.