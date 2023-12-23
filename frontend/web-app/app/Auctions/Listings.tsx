'use client';

import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import { Auction } from '@/types';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/auctionActions';
import Filters from './Filters';

export default function Listings() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);

  useEffect(() => {
    //IFEE
    async function initialDataLoad() {
      const data = await getData(pageNumber, pageSize);
      setAuctions(data.results);
      setPageCount(data.pageCount);
    }
    initialDataLoad();
  }, [pageNumber, pageSize]);

  if (auctions.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Filters pageSize={pageSize} setPageSize={setPageSize} />
      <div className='grid grid-cols-4 gap-6'>
        {auctions.map((auction: Auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
      <div className='flex justify-center mt-4'>
        <AppPagination
          pageChanged={setPageNumber}
          currentPage={pageNumber}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
