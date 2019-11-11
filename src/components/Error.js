import React from 'react';
import { Link } from 'react-router-dom';



const Error = () => {
    return (
         
        <div>
            
                <h1> 404 </h1>
                <p> Page not found </p>
                <Link to='/' className="btn btn-primary">Return Home </Link>
           
        </div>
    )
}


export default Error;