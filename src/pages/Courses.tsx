import * as React from 'react';
import styled from 'styled-components';

import gql from 'graphql-tag';
import {compose} from 'recompose';
import {graphql} from 'react-apollo';

import withLoader from 'hocs/withLoader';

export const Courses = (props: any) => {
  console.log(props);
  return (
    <div className={props.className}>
      <h4>Courses</h4>
    </div>
  );
};

const COURSES_QUERY = gql`
  {
    allCourses {
      id
      name
    }
  }
`;

export default compose(
  graphql(COURSES_QUERY, {name: 'coursesQuery'}),
  withLoader('coursesQuery')
)(styled(Courses)``);
