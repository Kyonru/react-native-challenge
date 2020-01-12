import {Cocktail} from 'src/@types/cocktails';

import {mapCocktailsFromApi} from 'src/services/api/mappers/cocktails';
import {get} from 'src/services/api/requester';

const endpoint = '1/search.php';

export const getCocktails = (s: string): Promise<Cocktail[]> =>
  get(endpoint, {s}).then(mapCocktailsFromApi);
