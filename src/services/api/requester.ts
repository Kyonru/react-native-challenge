import {constructRequestUrl} from './utils';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1';

export const fetchWithTimeout = (
  url: string,
  options?: any,
  timeout = 15000,
) => {
  return Promise.race([
    fetch(url, options).then(r => r.json()),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout),
    ),
  ]);
};

export const get = <T>(endpoint: string, params: {[key: string]: string}) =>
  fetchWithTimeout(
    constructRequestUrl({
      url: baseURL,
      endpoint,
      params,
    }),
  );
