// 'X' button for closing modals/pop-ups
import React from 'react';
import { CloseButtonProps } from '../../types';

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-4xl h-4xl bg-button-bg rounded-full flex items-center justify-center"
      aria-label="Close"
    >
      &times;
    </button>
  );
};

export default CloseButton;
