import './App.css';

function App() {
  const message = 'Hello World!';//adding javascript variables to html

  return (
    <div className="App">
      <h1>{message}</h1>{/*has a explantion for jsx*/}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>some text</p>{/*simple html value*/}
      <p>{'some text'}</p>{/*text and string can be value*/}
      <p>{12}</p>{/*intigers are valif value*/}
      {/*<p>{{name: 'Arian', id: 1}}</p> objects are not valid in jsx*/}
    </div>
  );
}

export default App;
