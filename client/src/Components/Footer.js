import React from "react";

export default function Footer(){

    const footerStyle = {
        backgroundColor: "#333",
        color: "white",
        fontSize: "12px",
        textAlign: "center",
        padding: "5px",
        position: "fixed",
        bottom: "0",
        width: "100%",
        zIndex: "9999", 
    };
    
    return(
        <div style={footerStyle}>
                &copy; {new Date().getFullYear()} HireMe. All Rights Reserved.
            </div>
    )
}