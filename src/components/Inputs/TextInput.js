import React from 'react'

const TextInput = ({ ...rest }) => {
  return (
    <div className="text-input">
        <input {...rest} />
    </div>
  )
}

export default TextInput