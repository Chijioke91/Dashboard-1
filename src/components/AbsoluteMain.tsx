import { FC } from 'react';
import Sidebar from './sidebar/Sidebar';

const AbsoluteMain: FC = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default AbsoluteMain;
