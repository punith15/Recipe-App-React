import React,{useContext} from 'react'
import {RecipeContext} from './RecipeContext'

const ViewRecipe = (props)=>{
    
    const data = props.location.state.data.recipe;
    console.log(data);
    return(
        <div className="row" style={{margin:"20px",width:"100%",height:"300px"}}>
            <h1 style={{width:"100%",color:"green",textAlign:"center",marginBottom:"40px",fontSize:"60px"}}>Recipe</h1>
            <div className="col-md-6">
                <h1 style={{background:"black",color:"white",fontStyle:"bold",padding:"5px 10px"}}>{data.label}</h1>
                <ul style={{marginLeft:"30px"}}>
                    {data.ingredients.map((ing,i)=>{
                        return <li key={i}>{ing.text}</li>
                    })
                    }
                </ul>
            </div>
            <div className="col-md-6">
            <img src={data.image} style={{width:"400px",height:"400px",marginLeft:"20%"}}/>
            </div>
        </div>
    )
}

export default ViewRecipe;