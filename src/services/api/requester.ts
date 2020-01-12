import {constructRequestUrl} from './utils';
export default {};

const baseURL = 'https://www.thecocktaildb.com/api/json/v1';

export const get = <T>(endpoint: string, params: {[key: string]: string}) =>
  fetch(
    constructRequestUrl({
      url: baseURL,
      endpoint,
      params,
    }),
  );
