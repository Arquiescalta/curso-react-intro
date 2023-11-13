import React from 'react'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const CompleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <AiOutlineCheckCircle
        className={className}
        onClick={onClick}
    />
  )
}

export {CompleteIcon}