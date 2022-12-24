import React from 'react'
type Props = {
  message : string
}
const ErrorMessage = (props : Props) => {
  return (
    <div className="bg-red-500 text-red-800">
      {props.message}
    </div>
  )
}

export default ErrorMessage