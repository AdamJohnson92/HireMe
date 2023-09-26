import React, { useState, useContext } from "react";
import { ArrayContext, UserContext } from "../App";

export default function Card() {

    const candidateArray = useContext(ArrayContext)

    return (

        <>
            {candidateArray.map((candidate) => (
                <div>
                    <h4>{candidate.firstName} {candidate.lastName}</h4>
                    <h6>{candidate.location}</h6>
                    <ul>
                        {candidate.skills.map((skill) => (
                            <li>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )

}