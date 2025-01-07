// PrimaryButton.tsx
import React from 'react';
import { ButtonProps } from '../../types';
import clsx from 'clsx';

const ActionButton = ({ label, onClick, type }: ButtonProps) => {
  const baseClasses = 'w-[150px] h-2xl rounded-base shadow-2xl font-body text-white active:shadow-inner disable:cursor-not-allowed disable:shadow-disable';

  const buttonClasses: Record<string, string> = {
    primary: 'bg-primary hover:bg-primary-300 active:bg-primary-600 focus:border-2 focus:border-primary-200 disable:bg-primary-100',
    secondary: 'border-2 border-primary text-primary hover:bg-primary-50 active:border-primary-600 focus:border-2 focus:border-primary-200 disable:bg-primary-100',
    addition: 'bg-secondary hover:bg-secondary-300 active:bg-secondary-700 focus:border-2 focus:border-secondary-200 disable:bg-secondary-100',
    delete: 'bg-error hover:bg-error-300 active:bg-error-700 focus:border-2 focus:border-error-200 disable:bg-error-100',
  };

  return (
    <button className={clsx(baseClasses, buttonClasses[type])} onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;
