'use server';

import { Auction, PagedResult } from '@/types';

export async function getData(query: string): Promise<PagedResult<Auction>> {
  const requestRoute = `http://localhost:6001/search${query}`;
  console.log(requestRoute);
  const res = await fetch(requestRoute);

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }
  return res.json();
}
