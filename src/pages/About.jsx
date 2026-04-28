
import { useState,useEffect } from 'react'
function About() {
 const [about, setabout] = useState({})
    

useEffect(() => {
 
    fetch('http://localhost:3000/about')
      .then(response => response.json())
      .then(data => setabout(data));

}, [])


  return (
    <>
     <p>{about.aboutUs.title}</p>
      <h4>{about.aboutUs.description}</h4>
    </>
  )
}

export default About