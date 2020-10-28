import React from 'react';
import DateSnippet from './DateSnippet';
import { formatDate } from './logic';

const Container = ({ date }) => (
  <DateSnippet date={formatDate(date)} />
);

export default Container;