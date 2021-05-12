import React, {useState, useEffect} from 'react'
import { FaArrowDown} from 'react-icons/fa';
import "./Checkbox.scss"

let filterData = {
    technologies : [],
    skills : [],
    location : []
}

let techArr = []
let skillArr = []
let locatArr = []

const Checkbox = ({options, selectedTech, category}) => {    

    const [dropdown, setDropdown] = useState(false)
    const [labels, setLabels] = useState(false)
    
    const checkBoxEvent = (Event) => {
        setLabels(!labels)

        if(category === "technologies"){
            if(Event.target.checked){
                techArr.push(Event.target.value)
                
            } else{
                let i = techArr.indexOf(Event.target.value)
                techArr.splice(i, 1)
            }
            filterData.technologies = [...techArr]
        } else if(category === "skills"){
            if(Event.target.checked){
                skillArr.push(Event.target.value)
                
            } else{
                let i = skillArr.indexOf(Event.target.value)
                skillArr.splice(i, 1)
            }

            filterData.skills = [...skillArr]
        } else if(category === "location"){
            if(Event.target.checked){
                locatArr.push(Event.target.value)
                
            } else{
                let i = locatArr.indexOf(Event.target.value)
                locatArr.splice(i, 1)
            }

            filterData.location = [...locatArr]
        }

        selectedTech(filterData, category)
    }

    const labelArray = () => {
        if(category === "technologies"){
            return techArr
        } else if(category === "skills"){
            return skillArr
        }else if(category === "location"){
            return locatArr
        }
    }

    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }


    const deleteLabel = (Event) => {
        setLabels(!labels)
        let i = labelArray().indexOf(Event.target.dataset.valueType)
        labelArray().splice(i, 1)
    }


    useEffect(() => {

    }, [labels])
    
    return (
        <div className="checkbox">
            <div className="heading">
                <h1>{category}</h1>
            </div>
            <div className="label-bar">
                <div className="labels">
                   {labelArray().map(label => {
                       return (
                        <div className="label">
                            <div className="name">{label}</div>
                            <div className="delete" onClick = {deleteLabel} data-value-type = {label}>
                                X
                            </div>
                       </div>
                       )
                   })}
                </div>
                <div className="down" onClick = {toggleDropdown}>
                    <FaArrowDown/>
                </div>
            </div>
            <div className="dropdown" id = {dropdown ? "open" : null}>
            {options.map( option => {
                return (
                    <div>
                        <input type="checkbox" name={option} value={option} onChange = {checkBoxEvent} />
                        <label htmlFor={option} >{option}</label>
                    </div>
                )
            })}
            </div>

        </div>
    )
}

export default Checkbox
