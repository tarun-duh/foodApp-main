import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({content, custom,onclickFn,link}) => {
  return (
    <button onClick={onclickFn} className={`h-14 mt-[16px] w-36 flex justify-center items-center border-2 z-10  text-xl py-3 px-4  rounded-full ${custom}`}>
      <Link to={link}>{content}</Link>
    </button>
  )
}

export default Button
