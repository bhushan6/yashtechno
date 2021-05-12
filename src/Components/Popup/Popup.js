import React from 'react'
import "./Popup.scss"

import { FaTimes } from 'react-icons/fa';


const Popup = ({profile, popped, close}) => {

    const cancel = () => {
        close(false)
    }

    const done = () => {
        close(false)
    }

    const closePopUp = () => {
        close(false)
    }

    return (
        <div className= "pop-up" id = {popped ? 'visible' : null}>

            <div className="header">
                <h1>Employee Details</h1>
                <p onClick={closePopUp}>
                    <FaTimes className="close"/>
                </p>
            </div>
            <div className="details">
                {
                    Object.entries(profile).splice(0, 7).map (details => {
                        return(
                            <div className = "column">
                                <h3>{details[0]}</h3>
                                <p>{Array.isArray(details[1]) ? details[1].join() : details[1]}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="message">
                <label htmlFor="">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="btns">
                <button id="cancel" onClick = {cancel}>Cancel</button>
                <button id ="done" onClick = {done}>Done</button>
            </div>
        </div>
    )
}

export default Popup
