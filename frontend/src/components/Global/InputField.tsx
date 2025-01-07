import React, { useState } from 'react';
import { InputFieldProps } from '@/types';

function InputField({
  label,
  placeholder,
  type = "text",
  ...rest
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='flex content-center'>
      {label && <label htmlFor="input">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        id="input"
        className='bg-neutral'
      />
      {/* Optional error display */}
      {rest.error && <span style={{ color: 'red' }}>{rest.error}</span>}
    </div>
  );
}

export default InputField;
