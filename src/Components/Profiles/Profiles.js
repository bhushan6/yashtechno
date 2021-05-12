import React, { useState, useEffect } from 'react'
import Popup from '../Popup/Popup'
import "./Profiles.scss"

import { v4 as uuidv4 } from 'uuid';


const Profiles = ({profiles}) => {

    const [popupProfile, setPopupProfile] = useState(undefined)
    const [poppedUp, setPoppedUp] = useState(false)

    const popUp = (num) => {
        setPopupProfile(num)
        setPoppedUp(true)
    }
    
    const close = (f) => {
        setPoppedUp(f)
    }

    const getControl = (p, num) => {
        if(p[0] === 'action') {
            return <span className = "action-btn" id={poppedUp ? 'event' : null} onClick = {() => {popUp(num)}}> Details </span>
        }
    
        if(p[0] === "location"){
            return p[1].join(" / ")
        }
    
        if(p[0] === "open to relocate" && p[1].length > 0){
            p[1] = "yes"
        } else if(p[0] === "open to relocate" && p[1].length === 0) {
            p[1] = "no"
        }
    
        if(Array.isArray(p[1]) && p[1].length > 3){
           return `${p[1].slice(0, 3).join()}...`
        }
        
        return Array.isArray(p[1]) ? p[1].join() : p[1]
        
    } 

    useEffect(() => {
        
    }, [popupProfile, poppedUp])

    return (
        <div className = "profile-section">
            <table>
                <thead>
                    <tr>

                        {profiles.length > 0? Object.entries(profiles[0]).map(header => {
                            return(<th>{header[0]}</th>)
                        }) : null}

                    </tr>
                </thead>
                <tbody>

                    {profiles.length > 0 ? profiles.map((profile, index) => {
                            return (<tr>
                                        {Object.entries(profile).map( p => {
                                            return (
                                                <td>{getControl(p, index)}</td>
                                            )
                                        })}
                                    </tr>)
                        }) : null}

                </tbody>
            </table>

            {profiles.length > 0 && popupProfile !== undefined ? (
                    <Popup 
                        profile = {profiles[popupProfile]}  
                        popped = {poppedUp}
                        close = {close}
                        key = {uuidv4()}
                    />
                ) : null }
        </div>
    )
}

export default Profiles
