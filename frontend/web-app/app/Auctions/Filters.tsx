'use client';

import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';
import { useParamsStore } from '@/hooks/useParamsStore';

const pageSizedButton = [4, 8, 12];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);

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
              onClick={() => setParams({ pageSize: value })}
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
