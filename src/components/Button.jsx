import React from 'react'

const Button = ({text, classStyle, type, style, svg}) => {
  return (
    <button className={`rounded-md p-2 font-AmazonEmberRegular flex items-center justify-center gap-2 ${classStyle}`} type={type} style={style}>
      {text}     
      {svg}
    </button>
  )
}

export default Button
