import React,{useContext} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

const Recipe = ({data})=>{

    return (
        <div className="col-md-3">
            <div className="card" style={{padding:"0px",margin:"10px"}}>
                <img src={data.recipe.image} style={{width: "100%"}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{data.recipe.label}</h5>
                    <p className="card-text">Calories : {data.recipe.calories}</p>
                    <Link className="btn btn-primary" to={{
                        pathname:'./recipe',
                        state:{
                            data : data
                        }
                        }}>View Recipe</Link>
                </div>
            </div>
        </div>
    )
}


export default Recipe;