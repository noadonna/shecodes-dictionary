import logo from "./dictionary-logo.png";
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo}
        className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <a href="https://github.com/noadonna/shecodes-dictionary" target="_blank" rel="noreferrer">Open-source code</a>
        {" "}by{" "} <a href="https://www.linkedin.com/in/carinevaneekelen" target="_blank" rel="noreferrer">Carine</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
