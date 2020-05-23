import React from 'react'

const ViewRecipe = (props)=>{
    
    const data = props.location.state.data.recipe;
    console.log(data);
    return(
        <div className="row" style={{padding:"20px",width:"100%",height:"300px",display:"flex",justifyContent:"center"}}>
            <h1 style={{width:"100%",color:"green",textAlign:"center",marginBottom:"40px",fontSize:"60px",fontStyle:"bold"}}>Recipe</h1>
            <div className="col-md-6" style={{display:"flex",justifyContent:"center"}}>
            <img src={data.image} className="img-responsive" style={{width:"500px",height:"400px"}}/>
            </div>
            <div className="col-md-6">
                <h3 style={{background:"green",color:"white",padding:"5px 10px",borderRadius:"50px",textAlign:"center"}}>{data.label}</h3>
                <ul style={{marginLeft:"30px"}}>
                    {data.ingredients.map((ing,i)=>{
                        return <li key={i}>{ing.text}</li>
                    })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default ViewRecipe;