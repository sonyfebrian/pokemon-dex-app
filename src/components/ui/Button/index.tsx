import React, { ReactNode } from 'react';

interface ButtonProps {
    navigation?: boolean;
    selected?: boolean;
    disabled?: boolean;

    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    navigation,
    selected,
    disabled,
    children,

}) => {
    const buttonClasses = `
    font-Montserrat font-semibold text-white rounded-md 
    flex justify-center items-center
    ${navigation ? 'w-12 h-12' : 'w-16 h-16'}
    ${selected ? 'bg-2F5AFF' : ''}
    ${navigation ? 'border-none' : ''}
    ${!navigation && !selected ? 'border-1 border-white' : ''}
    ${disabled ? 'pointer-events-none opacity-50' : ''}
  `;

    return (
        <button className={buttonClasses} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
