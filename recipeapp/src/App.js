import React,{useState,useEffect} from 'react';
import Nav from './Nav'
import ListRecipe from './ListRecipe'
import ViewRecipe from './ViewRecipe'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {RecipeProvider} from './RecipeContext'

function App() {
  return(
    <Router>
    <div>
      <Switch>
      <Route path="/" exact component={ListRecipe}/>
      <Route path="/recipe" component={ViewRecipe}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
