import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import DisplayRecipe from "./DisplayRecipe";
import SearchBar from "./SearchBar";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const APP_ID = "07bf5bd7";
  const APP_KEY = "88f567efdf7c6cabe5d591de2b1dae6a";
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    axios.get(exampleReq).then((res) => {
      console.log(res.data.hits);
      setRecipes(res.data.hits);
    });
  }, [query]);

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} setQuery={setQuery}/>
      <DisplayRecipe recipes={recipes} />
    </div>
  );
}

export default App;
