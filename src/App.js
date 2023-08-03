import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <header>
        <title>Coding Assignment</title>
      </header>
      <body>
      <h1>Contact Information</h1>
        <Table />
        <Navigation />
      </body>
    </div>
  );
}

export default App;
