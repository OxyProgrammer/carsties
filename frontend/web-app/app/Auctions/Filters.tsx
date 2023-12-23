'use client';

import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';

type Props = {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
};
const pageSizedButton = [4, 8, 12];

export default function Filters({ pageSize, setPageSize }: Props) {
  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <span className='uppercase text-sm text-gray-500 mb-4 mr-4'>
          Page Size
        </span>
        <ButtonGroup>
          {pageSizedButton.map((value, i) => (
            <Button
              key={i}
              onClick={() => setPageSize(value)}
              color={`${pageSize === value ? 'red' : 'gray'}`}
              className='focus:ring-0'
            >
              {value}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
