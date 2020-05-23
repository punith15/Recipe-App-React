import React,{useState,useEffect} from 'react';
import Recipe from './Recipe'

const ListRecipe = ()=>{
    const APP_ID = "fa710370";
  const APP_KEY = "b05a64a702399aa22dff1e4185a9a6a3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  const [loading, setLoading] = useState(true)

  const getRecipes = async ()=>{
    const data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
                       .then(res=>res.json());
    console.log(data.hits);
    setRecipes(data.hits);
    setLoading(false)
  }

  useEffect(()=>{
    getRecipes();
  },[query]);

  const updateSearch = (e)=>{
    setSearch(e.target.value);
  }

  const getQuery = (e)=>{
    setLoading(true)
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <div className="form-div">
      <h1 style={{color:"white"}}>Love For Food Never Ends..!!!</h1>
      <form className="search-form col-md-4" onSubmit={getQuery}>
        <input className="search-bar form-control" type="text" onChange={updateSearch} value={search}/>
        <button className="search-button btn btn-primary" type="submit">Search</button>
      </form>
      </div>
      <h3 className="menu">Menu</h3>
      <div className="row" style={{padding:"20px"}}>
      {!loading ? recipes.map((recipe,index)=>{
        return <Recipe data={recipe} key={index}/>
      }): <div className="load"><div className="loader"></div></div>}
      </div>
    </div>
  );
}

export default ListRecipe;