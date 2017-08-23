import React from 'react';

import Header from 'components/Header';

export const withHeader = Wrapped => props => {
  return (
    <div>
      <Header {...props} />
      <Wrapped {...props} />
    </div>
  );
};

export default withHeader;
