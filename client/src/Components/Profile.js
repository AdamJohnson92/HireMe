import React, { useState, useContext } from "react";
import { UserContext } from "../App";
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