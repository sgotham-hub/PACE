import React, {useState} from 'react'
import logo from '../../assets/logo.JPG'
import '../css/header.css'
import {Link} from "react-router-dom";

function Header() {
    
     const [search, setSearch] = useState(false);

     const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className = 'heading'>
            <header>
            
                <div className = 'logo' >
                    <Link to="/"> <img className= "logoImage" src = {logo} alt = "Company Logo"  /></Link>

                </div>
                
            </header>
            <div>
                <div className = 'search'>
                    <input className = {searchClass} type = "text" placeholder ="Search"/>
                    <img className = "searchIcon" onClick = {openSearch} src={require('../../assets/search_icon.png')} alt = "Search" />
                </div>
            </div>
        </div>
        
    )
}



export default Header
