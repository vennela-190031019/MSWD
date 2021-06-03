import React from 'react'

// A React-component called Course
  
const Course = (props) => {
    return (
      <div>
        <Header name={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts} />
      </div>
    )
  }
  
  const Total = (props) => {
   
    const add = props.parts.reduce((t, p) => t + p.exercises, 0)
    return (
      <div>
        <h3>Total: {add}</h3>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part => 
        <div key={part.id}> 
            <Part name={part.name} exercises={part.exercises}/> 
        </div>)}
        
      </div>
    )
  }
  
  const Part= (props) => {
    return (
      <h4>
        {props.name}: {props.exercises}
      </h4>
    )
  }
  
  
  const Header = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
      </div>
    )
  }

  
  export default Course