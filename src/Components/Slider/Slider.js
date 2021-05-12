import React from 'react'
import './Slider.scss'

const Slider = () => {

    const slide = (Event) => {
        console.log(Event.target.value)
    }

    return (
        <div className = "slider">
            <input type="range" min = "0" max = "20" name="" id="" onChange = {slide}/>
        </div>
    )
}

export default Slider
