import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import React, {useState, useEffect} from 'react'
import Profiles from './Components/Profiles/Profiles';
import Checkbox from './Components/Checkbox/Checkbox';
// import Slider from './Components/Slider/Slider';
import { v4 as uuidv4 } from 'uuid';

function getUnique(arr){

  // removing duplicate
  let uniqueArr = [...new Set(arr)];
  return uniqueArr
}

let jsonData;
let tech = []
let skill = []
let location = []
let uniqueArr = []

function App() {
  
  let filtredArr = []
  let fA = []
  let fB = []


  const [profiles, setProfiles] = useState([])
  const [technologies, setTechnologies] = useState([])
  const [skills, setSkills] = useState([])
  const [locations, setLocations] = useState([])

  const [filters, setFilters] = useState({})



  
  const loadFilters = () => {
    
    if(profiles.length > 0){
      profiles.map(pro => {
        tech.push(...pro.technologies)
        skill.push(...pro.skills)
        location.push(...pro.location)

        return null
      })
      setTechnologies(getUnique(tech))
      setSkills(getUnique(skill))
      setLocations(getUnique(location))
    }
  }


  const loadProfiles = async() => {
    const data = await fetch("./data.json")
    jsonData = await data.json()
    jsonData.forEach((d) => {
      d['action'] = 'button'
    })
    setProfiles(jsonData)
  }


  const filter = (filterData, category) => {
    setFilters({
      ...filterData
    })
  }

  useEffect(() => {
    loadProfiles()
  }, [])

  useEffect(() => {
    loadFilters()
  }, [profiles])

  useEffect(() => {
  }, [filters])

  const done = () => {
    Object.entries(filters).map((data, i) => {
      if(jsonData && data[1].length > 0){
        jsonData.map( jData => {
          data[1].map( d => {
            if(i === 0){
              if(jData.technologies.indexOf(d) >= 0){
                filtredArr.push(jData)
              }
              uniqueArr = getUnique(filtredArr)
            }else if(i === 1){
              filtredArr.map(fD => {
                if(fD.skills.indexOf(d) >= 0){
                  fA.push(fD)
                }
              })
              uniqueArr = getUnique(fA)
            } else if(i === 2){
              fA.map(fD => {
                if(fD.location.indexOf(d) >= 0){
                  fB.push(fD)
                }
              })
              uniqueArr = getUnique(fB)
            }
          })
        })
       return setProfiles(uniqueArr)
      }
    }) 
  }

  const reset = () => {
    if(jsonData){
      setProfiles(jsonData)
    }
  }


  return (
    <div className="App">   
      <Navbar/>
      <Profiles profiles = {profiles} key = {uuidv4()} />
      {technologies.length > 0 ? <Checkbox key = {uuidv4()} options = {technologies} selectedTech = {filter} category = "technologies"/> : null}
      {skills.length > 0 ? <Checkbox key = {uuidv4()} options = {skills} selectedTech = {filter} category = "skills"/> : null}
      {locations.length > 0 ? <Checkbox key = {uuidv4()} options = {locations} selectedTech = {filter} category = "location"/> : null}

      <div className="btns">
        <button className = "reset" onClick = {reset}>Reset</button>
        <button className = "done" onClick = {done}>Done</button>
      </div>
    </div>
  );
}

export default App;
