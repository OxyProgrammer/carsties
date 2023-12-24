'use client';

import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react';
import { useParamsStore } from '@/hooks/useParamsStore';
import { AiOutlineClockCircle, AiOutlineSortAscending } from 'react-icons/ai';
import { BsFillStopCircleFill, BsStopwatchFill } from 'react-icons/bs';
import { GiFinishLine, GiFlame } from 'react-icons/gi';

const pageSizedButton = [4, 8, 12];
const orderButtons = [
  { label: 'Alphabetical', icon: AiOutlineSortAscending, value: 'make' },
  { label: 'Ending Soon', icon: AiOutlineClockCircle, value: 'end' },
  { label: 'Recently Added', icon: BsFillStopCircleFill, value: 'new' },
];
const filterButtons = [
  { label: 'Live', icon: GiFlame, value: 'live' },
  { label: 'Ending < 6 hours', icon: GiFinishLine, value: 'endingSoon' },
  { label: 'Completed', icon: BsStopwatchFill, value: 'finished' },
];

export default function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams);
  const orderBy = useParamsStore((state) => state.orderBy);
  const filterBy = useParamsStore((state) => state.filterBy);

  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <span className='uppercase text-sm text-gray-500 mb-4 mr-4'>
          Filter By
        </span>
        <ButtonGroup>
          {filterButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ filterBy: value })}
              color={`${filterBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <div>
        <span className='uppercase text-sm text-gray-500 mb-4 mr-4'>
          Order By
        </span>
        <ButtonGroup>
          {orderButtons.map(({ label, icon: Icon, value }) => (
            <Button
              key={value}
              onClick={() => setParams({ orderBy: value })}
              color={`${orderBy === value ? 'red' : 'gray'}`}
            >
              <Icon className='mr-3 h-4 w-4' />
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>

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
