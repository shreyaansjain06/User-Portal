import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <>
             <h1 className="Error_header position-absolute top-50 start-50 translate-middle">
                 404
             </h1>
             <div className="Error_description position-absolute top-50 start-50 translate-middle text-center mt-3 text-uppercase">
                <h1>We are sorry page not found!</h1>
                <p>
                 The page you are looking for might have been removed had its name changed
                 or is temporarily unavailable.
             </p>
             <NavLink to="/" className="btn btn-primary">
                 Back To Homepage
             </NavLink>
             </div>
             
             
        </ >
    )
}

export default ErrorPage
