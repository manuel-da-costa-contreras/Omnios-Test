import { get } from './base';

export async function getBeers(): Promise<any> {
  const response = await get(`https://api.punkapi.com/v2/beers`);

  return response;
}

export async function getDeveloper(): Promise<any> {
  const response = await get(`https://randomuser.me/api/`);

  return response;
}
