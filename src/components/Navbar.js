import React, { useState } from 'react';

const Navbar = (props) => {
    const[value, setValue] = useState()
    const[data, setdata] = useState([])
    
    return (

        <>

            <div>

              
                 
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/home">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/business">business</a>
                                    <a className="dropdown-item" href="/entertainment">entertainment</a>
                                    <a className="dropdown-item" href="/general">general</a>
                                    <a className="dropdown-item" href="/health">health</a>
                                    <a className="dropdown-item" href="/science">science</a>
                                    <a className="dropdown-item" href="/sports">sports</a>
                                    <a className="dropdown-item" href="/technology">technology</a>


                                </div>
                            </li>
                        </ul>
                           
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.searchMore} value={value} >Search</button>
                           
                        </form>

                    </div>
                </nav>

            </div>
        </>
    );

}
export default Navbar;