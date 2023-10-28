import React from 'react';
import "../fonts/fonts.css"

interface Props {

  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({  children }) => {
  return (
    <>
      <div className='text-black text-center font-nightmarePills  '>{children}</div>
    </>
  );
};

