import React,{useContext, useEffect} from 'react'
import noteContext from '../contexts/noteContext'

const About = () => {
  const data=useContext(noteContext);
  
  useEffect(() => {
    data.update();
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>This is About {data.state.name}</div>
  )
}

export default About