import React from 'react';

export interface InputProps {
    onChange?: (value: string) => void;
    value?: string;
    inputType?: string
    placeholder?: string
    disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
    onChange = () => {},
    value = '',
    inputType = 'text',
    placeholder = 'escribir',
    disabled = false,
    ...props
}: InputProps) => {
  return (
    <>
        <input
            onChange={(e) => onChange(e.target.value)}
            value={value}
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
