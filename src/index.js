import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
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
          {this.renderSquare(8)}
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
// ==ReactDOM.render(<App />, document.getElementById('root'));

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = 
setInterval(
     () => this.tick(),
    1000
   );

  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
console.log(this.timerID);

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h3>TIME ID {this.timerID}.</h3>
      </div>
    );
  }
}


function App2() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);



//ReactDOM.render(
// <ul>{listItems}</ul>,
 // document.getElementById('root')
//);

//ReactDOM.render(
// <Game />,
//  document.getElementById('root')
// );

const data = [
{
"name": "Baked Salmon ашму",
"ingredients": [
{ "name": "Salmon", "amount": 1, "measurement": "l lb" },
{ "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
{ "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
{ "name": "Yellow Squash", "amount": 1, "measurement": "med" },
{ "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },

{ "name": "Garlic", "amount": 3, "measurement": "cloves" }
],
"steps": [
"Preheat the oven to 350 degrees.",
"Spread the olive oil around a glass baking dish.",
"Add the salmon, garlic, and pine nuts to the dish.",
"Bake for 15 minutes.",
"Add the yellow squash and put back in the oven for 30 mins.",
"Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
]
},
{
"name": "Fish Tacos",
"ingredients": [
{ "name": "Whitefish", "amount": 1, "measurement": "l lb" },
{ "name": "Cheese", "amount": 1, "measurement": "cup" },
{ "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
{ "name": "Tomatoes", "amount": 2, "measurement": "large"},
{ "name": "Tortillas", "amount": 3, "measurement": "med" }
],
"steps": [
"Cook the fish on the grill until hot.",
"Place the fish on the 3 tortillas.",
"Top them with lettuce, tomatoes, and cheese."
]
}
]

const Recipe = ({ name, ingredients, steps }) =>
<section id={name.toLowerCase().replace(/ /g, "-")}>
<h1>{name}</h1>
<ul className="ingredients">
{ingredients.map((ingredient, i) =>
<li key={i}>{ingredient.name+'111'}</li>
)}
</ul>
<section className="instructions">
<h2>Cooking Instructions</h2>
{steps.map((step, i) =>
<p key={i}>{step}</p>
)}
</section>
</section>

const Menu = ({ title, recipes }) =>
<article>
<header>
<h1>{title}</h1>
</header>
<div className="recipes">
{recipes.map((recipe, i) =>
<Recipe key={i} {...recipe} />
)}

</div>
</article>

//ReactDOM.render(
//<Menu recipes={data}
//title="Delicious Recipes" />,
//document.getElementById("root")
//) 


let SInfo = (_Starsel,_AllStar) =>console.log( '$_Starsel of  $_AllStar ')



const Star = ({ selected=false, onClick=f=>f }) =>
<div className={(selected) ? "star selected" : "star"}
onClick={onClick}>
</div>

Star.defaultProps = {
selected: 0,
steps: f=>f
}


class StarRating extends React.Component {
constructor(props) {
super(props)
this.state = {
starsSelected: 4
}
this.change = this.change.bind(this)
}
change(starsSelected) {
this.setState({starsSelected})
}

render() {

const {totalStars} = this.props
const {starsSelected} =this.state

return (
<section className="star-">

<div className="star-rating">
{[...Array(totalStars)].map((n, i) =>
 <Star key={i}
selected={i<starsSelected}
onClick={() =>{
  this.change(i+1);
  <h1  > {starsSelected}</h1>}
}
/>
)}

</div>
</section>
)
}
}


ReactDOM.render(
<StarRating totalStars={8} starsSelected={5} title='All'/>,
document.getElementById('root')
)

registerServiceWorker();

