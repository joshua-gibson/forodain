import React from 'react';
import "tailwindcss/tailwind.css"

interface Props {

  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({  children }) => {
  return (
    <>
      <h1 className='text-green-500 text-right'>{children}</h1>
    </>
  );
};

