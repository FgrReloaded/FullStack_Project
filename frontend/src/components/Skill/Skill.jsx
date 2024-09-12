import React from 'react'
import './style.css'
function Skill({src, skill}) {
  return (
    <>
     <div className="skill-container">
      <img src={src} alt={skill} className="skill-image" />
      <p className="skill-name">{skill}</p>
     </div>
    </>
  )
}

export default Skill
