import React, { useState, useContext } from "react";
import { UserContext } from "../pages/Home";
import CandidatePage from "../Components/CandidatePage";
import EmployerPage from "../Components/EmployerPage";

export default function Profile(){
    
    const user = useContext(UserContext)

    function renderPage(){
        if(user.isEmployer === true) {
            return <EmployerPage></EmployerPage>
        } else {
            return <CandidatePage></CandidatePage>
        }
    }

    return(
        <>
            {/* <CandidatePage></CandidatePage>
            <EmployerPage></EmployerPage> */}
            {renderPage()}
        </>
    )
}