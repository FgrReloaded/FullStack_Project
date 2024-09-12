import React from 'react'
import './style.css'
import Skill from '../Skill/Skill'

function SkillListing() {
  return (
    <>
     <div className="skills-container">
      <Skill src="./src/images/hero.jpg" skill="skill 1"/>
      <Skill src="./src/images/hero.jpg" skill="skill 2"/>
      <Skill src="./src/images/hero.jpg" skill="skill 3"/>
      <Skill src="./src/images/hero.jpg" skill="skill 4"/>
      <Skill src="./src/images/hero.jpg" skill="skill 5"/>
      <Skill src="./src/images/hero.jpg" skill="skill 6"/>
      </div> 
    </>
  )
}

export default SkillListing
