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

  const setSortTypeFromSortFilter = (sortType) => {
      if(sortType == "ascending")
          contacts.sort((a, b) => a.id - b.id)
      if(sortType == "descending")
          contacts.sort((a, b) => b.id - a.id)
      setSortType(sortType)
  }

  return (
    <div className="App">
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Coding Assignment</title>
      </header>
      <body>
      <h1>Contact Information</h1>
        <SortFilter setSortType={setSortTypeFromSortFilter} sortType={sortType}/>
        <Table pageNumber={pageNumber} contacts={contacts}/>
        <Navigation setPageNumber={setPageNumberFromNavigation} pageNumber={pageNumber}/>
      </body>
    </div>
  );
}

export default App;
