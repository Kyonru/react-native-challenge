import {Cocktail} from 'src/@types/cocktails';

export const extractDrinks = (response: any): any[] => {
  if (!response.drinks || !Array.isArray(response.drinks)) {
    return [];
  }
  return response.drinks;
};

export const mapCocktailResponse = (cocktail: any): Cocktail => {
  return {
    metaData: cocktail,
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    imageUrl: cocktail.strDrinkThumb,
  };
};

export const mapCocktailsFromApi = (cocktailsResponse?: any): Cocktail[] => {
  const cocktails = extractDrinks(cocktailsResponse);
  return cocktails.map(mapCocktailResponse);
};
