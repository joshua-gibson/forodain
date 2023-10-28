import React from 'react';
import "../fonts/fonts.css"

interface Props {
  children?: React.ReactNode;
}

export const BottomShelf: React.FC<Props> = ({  children }) => {
  return (
      <div className='text-white bg-black border-white w-full flex-1'>
        {children}
        </div>
  );
};

