import React from 'react'

interface InputProps {
    inputLabel: string,
    inputValue: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    isDisabled?: boolean
}

const InputWithLabel:React.FC<InputProps> = ({inputLabel, inputValue, handleChange, isDisabled}) => {
  return (
    <div className='input-container'>
    <label htmlFor={inputLabel}>{inputLabel}:</label>
    <input type="text" name={inputLabel} id={`photo-${inputLabel}`} value={inputValue} onChange={handleChange} disabled={isDisabled}/>
</div>
  )
}

export default InputWithLabel