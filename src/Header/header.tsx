import React from 'react';

interface Props {

  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({  children }) => {
  return (
    <>
      <h1 className='headerClass'>{children}</h1>
    </>
  );
};

