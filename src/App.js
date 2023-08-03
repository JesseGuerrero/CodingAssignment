import {useState} from 'react'
import './App.css';
import Table from "./components/Table";
import Navigation from "./components/Navigation";
import SortFilter from "./components/SortFilter";

function App() {
  const [pageNumber, setPageNumber] = useState(1)

  const setPageNumberFromNavigation = (pageNumber) => {
      if(pageNumber < 1)
          pageNumber = 1
      if(pageNumber > 100)
          pageNumber = 100
      setPageNumber(pageNumber)
  };

  return (
    <div className="App">
      <header>
        <title>Coding Assignment</title>
      </header>
      <body>
      <h1 style={{marginBottom: "-0.05em"}}>Contact Information</h1>
        <SortFilter />
        <Table pageNumber={pageNumber}/>
        <Navigation setPageNumber={setPageNumberFromNavigation} pageNumber={pageNumber}/>
      </body>
    </div>
  );
}

export default App;
