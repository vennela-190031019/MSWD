import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";




const Content = (params) => {
  return (
    <div>
      <Parts topic={params.courses[0].topic} excercises={params.courses[0].exercises} />
      <Parts topic={params.courses[1].topic} excercises={params.courses[1].exercises} />
      <Parts topic={params.courses[2].topic} excercises={params.courses[2].exercises} />
    </div>
  )
}


const Parts = (params) => {
  return (
    <div>
      <p>{params.topic} : {params.excercises}</p>

    </div>
  )
}




const App = () => {
  const course = {
    name: "Half Stack application development",
    courses: [
      {
        topic: "Fundamentals of React",
        exercises: 10,
      },
      {
        topic: "Using props to pass data",
        exercises: 7,
      },
      {
        topic: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content courses={course.courses} />
      <Total courses={course.courses} />
    </div>
  )
}
const Header = (params) => {
  return (
    <div>
      <h2> {params.course.name}</h2>
    </div>
  )
}
const Total = (params) => {
  return (
    <div>
      <h4>Number of exercises {params.courses[0].exercises+ params.courses[1].exercises + params.courses[2].exercises}</h4>
    </div>
  )
}
export default App
