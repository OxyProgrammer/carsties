'use client';

import { useParamsStore } from '@/hooks/useParamsStore';
import { FaSearch } from 'react-icons/fa';
export default function Search() {
  const setParams = useParamsStore(state => state.setParams);
  const setSearchValue = useParamsStore(state => state.setSearchValue);
  const searchValue = useParamsStore(state => state.searchValue);

  return (
    <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
      <input
        type='text'
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            setParams({ searchTerm: searchValue });
          }
        }}
        className='
            input-custom
            text-sm
            text-gray-500
        '
        placeholder='Search for cars my make, model or color'
        value={searchValue}
        onChange={(e: any) => setSearchValue(e.target.value)}
      />
      <button onClick={(e) => setParams({ searchTerm: searchValue })}>
        <FaSearch
          size={34}
          className='bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'
        />
      </button>
    </div>
  );
}
