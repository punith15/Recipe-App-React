import React from 'react'

const Nav = ()=>{
    return(
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Recipies</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">HOME</li>
                <li className="nav-item">ABOUT</li>
                <li className="nav-item">SERVICES</li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;