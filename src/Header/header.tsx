import React from 'react';
import "../fonts/fonts.css"

interface Props {

  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({  children }) => {
  return (
    <>
      <h1 className='text-white text-center font-nightmarePills text-6xl'>{children}</h1>
    </>
  );
};

