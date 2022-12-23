import React from 'react'

const CustomerNear = (props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="rounded-sm">
        <div className="flex">
        <h1>Name: </h1>
        <div>{props.name}</div>
        </div>
        <div className="flex">
        <h1>Name: </h1>
        <div>{props.distance}</div>
        </div>
      </div>
    </div>
  )
}

export default CustomerNear
