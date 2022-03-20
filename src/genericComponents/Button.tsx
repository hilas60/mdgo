import React from 'react'

interface Props {
    clickHandler: () => void,
    label: string,
    styleClass?: string,
}

const Button = (props:Props) => {
    const {clickHandler, label, styleClass ='' } = props
  return (
    <button onClick={clickHandler} className={`btn ${styleClass}`}><i className={`fa fa-${label}`}></i></button>
  )
}

export default Button