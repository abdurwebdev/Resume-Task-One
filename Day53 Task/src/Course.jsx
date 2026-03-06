import React from 'react'
import {useParams} from 'react-router-dom'

const Course = () => {
  const {courseName} = useParams();
  console.log(courseName);
  return (
    <div>Course:- {courseName}</div>
  )
}

export default Course