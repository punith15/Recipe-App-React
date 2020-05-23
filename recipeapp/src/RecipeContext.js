import React,{createContext,useState} from 'react'
import ListRecipe from './ListRecipe'
import ViewRecipe from './ViewRecipe'
import Recipe from './Recipe'

const RecipeContext = createContext();

class RecipeProvider extends React.Component{
    state = {
        data : {}
    }

    render(){
        return(
            <RecipeContext.Provider value={{
                ...this.state,
                setData : this.setData
            }}>
            </RecipeContext.Provider>
        )
    }
    
    
}

export {RecipeContext, RecipeProvider};
