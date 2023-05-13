import React from 'react';

import { Navbar } from "../../../../components/Navbar";
import { Footer } from '../../../../components/Footer';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {

  return (
    <div>
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      <div className="mt-[65px] sm:mt-0">{children}</div>
      <Footer/>
    </div>
  );
};