import * as React from 'react';

import {branch, renderComponent} from 'recompose';
import LoadingSpinner from 'components/LoadingSpinner';

export default (isLoadingFn: any) => {
  let isLoading;

  if (typeof isLoadingFn === 'function') {
    isLoading = (props: any) => isLoadingFn(props);
  } else if (typeof isLoadingFn === 'string') {
    isLoading = (props: any) =>
      props[isLoadingFn] && props[isLoadingFn].loading;
  } else {
    isLoading = isLoadingFn;
  }
  return branch(isLoading, renderComponent(LoadingSpinner));
};
