import React from 'react';

type RowProps = {
  type: 'work' | 'education';
  title: string;
  position?: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
};

const Row = ({
  type,
  title,
  position,
  institution,
  dateStart,
  dateEnd,
}: RowProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Position>{position}</Position>
      <Institution>{institution}</Institution>
      <DateStart>{dateStart}</DateStart>
      <DateEnd>{dateEnd}</DateEnd>
    </>
  );
};
