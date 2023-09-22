import React, {useState} from "react";


export default function Header({currentPage, handlePageChange}){
    
    return(
        <div className="header">
            <h1>HireMe</h1>
            <h2>Find Your Perfect Candidate!</h2>
        </div>
    )
}