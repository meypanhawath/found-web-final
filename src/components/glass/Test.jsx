import React from 'react'

const Test = ({animation = ""}) => {
  return (
    <>
    <div className={`w-50 h-50 bg-red-500 transition duration-500 ${animation}`}></div>
    </>
  )
}

export default Test