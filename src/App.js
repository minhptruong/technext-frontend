import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { getPatentResults, getRandomPatentResults } from "./PatentSearch"; 

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);


  function handleInput(e) {
    setQuery(e.target.value);
  }

  const fetchResults = () => {
    getPatentResults(query).then((data) => {
      setResults(data.results);
    });

  } 

  const fetchRandomResults = () => {
    getRandomPatentResults().then((data) => {
      console.log(data.result);
      setResults(data.results);
    });

  } 

  return (
    <div>
      <header>
        <label>
            Patent Search:
            <input value={query} onChange={handleInput}/>
        </label>
        <button onClick={fetchResults}>Submit</button>
        <button onClick={fetchRandomResults}>Random</button>
      </header>
      <div>
      <ul>
        {results.map(data => (
          <li key={data.patent_id}> 
          <p>{data.patent_id}</p>
          <p>{data.patent_text}</p>
          </li>
        ))}
      </ul>
        
      </div>
    </div>
  );
}

export default App;
