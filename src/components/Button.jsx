import React from 'react'

const Button = ({btnText, className}) => {
  return (
    <button className={` font-pop font-semibold text-2xl ${className}`}>{btnText}</button>
  )
}

export default Button