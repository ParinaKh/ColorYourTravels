import React from 'react'
import page404 from '../images/page404.jpg'

export default function ErrorPage() {
    return (
        <div className="errorMessage">OOPS ! Wrong way, your page is not found!
        <img className= "errorImage" src ={page404} alt ={errorImage}></img>
            
        </div>
    )
}
