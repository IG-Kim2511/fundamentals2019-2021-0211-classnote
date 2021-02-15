import logo from './logo.svg';
import './App.css';

function Food({fav}) {
  return(
    <h1>I like {fav}</h1>
  ) 
}

function App() {
  return (
    <div className="App">
     
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="rice"/>
      <Food fav="bread"/>
    </div>
  );
}

export default App;
