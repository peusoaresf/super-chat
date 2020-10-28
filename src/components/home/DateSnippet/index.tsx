import React from 'react'
import DateSnippet from './DateSnippet'
import formatDate from './formatDate'

interface ContainerProps {
  date: Date
}

const Container = ({ date }: ContainerProps) => (
  <DateSnippet date={formatDate(date)} />
)

export default Container
