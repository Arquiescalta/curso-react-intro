import React from 'react'
import {AiOutlineDelete} from 'react-icons/ai'

const DeleteIcon = (props) => {
    const {className, onClick} = props
  return (
    <AiOutlineDelete
        className={className}
        onClick={onClick}
    />
  )
}

export {DeleteIcon}