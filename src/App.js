import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayRecipe from "./DisplayRecipe";

function App() {
  const[recipes, setRecipes] = useState([]);

  const APP_ID = "07bf5bd7";
  const APP_KEY = "88f567efdf7c6cabe5d591de2b1dae6a";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    axios.get(exampleReq).then(res=>{
      console.log(res.data.hits);
      setRecipes(res.data.hits);
    })
  }, []);


  return (
    <div className="App">
      <form className="searchForm">
        <h1>My recipe App</h1>
        <input className="searchBar" type="text" />
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <DisplayRecipe recipes={recipes}/>
    </div>
  );
}


export default App;
