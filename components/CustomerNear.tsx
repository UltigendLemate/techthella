import React from 'react'
type Props = {
  name: string;
}
const CustomerNear = (props:Props) => {
  return (
    <div className="grid grid-cols-2">
      <div className="rounded-sm">
        <div className="flex">
        <h1>Name: </h1>
        <div>{props.name}</div>
        </div>
        <div className="flex">
        <h1>Name: </h1>
        <div>ok ok </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerNear
