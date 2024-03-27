import logo from './logo.svg';
import './App.css';
import HelloComponent from './1.BasicReact/1.HelloComponent/HelloComponent';
import CounterComponent from './1.BasicReact/2.CounterComponent/CounterComponent';

function App() {
  return (
    <>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          vikash Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hey there</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    {/* <HelloComponent /> */}
     {/* <HelloComponent name={"Tarun"}/>
    <HelloComponent name={"Arun"}/>
    <HelloComponent name={"utkarsh"}/> */}
   

      <CounterComponent heading="Counter for kids"/>
    </>
    
  );
}

export default App;
