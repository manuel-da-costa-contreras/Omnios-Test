import { get } from './base';

export async function getBeers(): Promise<any> {
  const response = await get(`https://api.punkapi.com/v2/beers`);

  return response;
}
