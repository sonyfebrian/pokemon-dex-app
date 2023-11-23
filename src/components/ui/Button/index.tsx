import React, { ReactNode } from 'react';

interface ButtonProps {
    navigation?: boolean;
    selected?: boolean;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    navigation,
    selected,
    disabled,
    children,
    onClick
}) => {
    const buttonClasses = `
     font-semibold text-white rounded-md 
    flex justify-center items-center
    ${navigation ? 'w-8 h-8' : 'w-10 h-10'}
    ${selected ? 'bg-[#2F5AFF]' : ''}
    ${navigation ? 'border-none' : ''}
    ${!navigation && !selected ? 'border border-white ' : ''}
    ${disabled ? 'pointer-events-none opacity-50' : ''}
  `;

    return (
        <button className={buttonClasses} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
