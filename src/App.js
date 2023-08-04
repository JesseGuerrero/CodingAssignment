import './App.css';

import {useState} from 'react'
import Table from "./components/Table";
import Navigation from "./components/Navigation";
import SortFilter from "./components/SortFilter";

let contacts = require("./contacts.json")

function App() {
  const [pageNumber, setPageNumber] = useState(1)
  const [sortType, setSortType] = useState("ascending")

  const setPageNumberFromNavigation = (pageNumber) => {
      if(pageNumber < 1)
          pageNumber = 1
      if(pageNumber > contacts.length/10)
          pageNumber = contacts.length/10
      setPageNumber(pageNumber)
  };

  return (
    <div className="App">
      <header>
        <title>Coding Assignment</title>
      </header>
      <body>
      <h1 style={{marginBottom: "-0.05em"}}>Contact Information</h1>
        <SortFilter setSortType={setSortType} sortType={sortType}/>
        <Table pageNumber={pageNumber} contacts={contacts}/>
        <Navigation setPageNumber={setPageNumberFromNavigation} pageNumber={pageNumber}/>
      </body>
    </div>
  );
}

export default App;
