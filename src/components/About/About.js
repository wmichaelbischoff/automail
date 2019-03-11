import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout'


function About(){
    
    return(
        <div>
            <Logout />
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default About