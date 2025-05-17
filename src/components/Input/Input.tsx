import React from 'react';

export interface InputProps {
    inputType?: string
    placeholder?: string
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
    inputType = 'text',
    placeholder = 'escribir',
    disabled = false,
    ...props
}: InputProps) => {
  return (
    <>
        <input
            type={inputType}
            placeholder={placeholder}
            disabled={disabled}
            style={{ border: '1px solid #999999',
                borderRadius: '4px',
                padding: '8px',
                width: '200px',
                opacity: `${disabled ? '.6' : ''}`
            }}
            {...props}
        />    
    </>
  );
};
