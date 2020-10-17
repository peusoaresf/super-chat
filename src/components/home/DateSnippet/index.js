import React from 'react';
import Component from './index.component';
import { formatDate } from './index.logic';

const DateSnippet = ({ date }) => (
  <Component
    date={date}
    formatDate={formatDate} />
);

export default DateSnippet;