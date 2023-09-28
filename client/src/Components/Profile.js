import React, { useState, useContext } from "react";
import { UserContext } from "../pages/Home";
import CandidatePage from "./CandidatePage";
import EmployerPage from "./EmployerPage";

export default function Profile(){
    
    const user = useContext(UserContext)

    return(
        <>
            <CandidatePage></CandidatePage>
            <EmployerPage></EmployerPage>
        </>
    )
}