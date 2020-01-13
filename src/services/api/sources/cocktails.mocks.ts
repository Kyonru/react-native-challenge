import {Cocktail} from 'src/@types/cocktails';
export const getCocktails = (s: string): Promise<Cocktail[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          metaData: {
            idDrink: '13196',
            strDrink: 'Long vodka',
            strDrinkAlternate: null,
          },
          id: 13196,
          name: 'Long vodka',
          imageUrl:
            'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg',
        },
      ]);
    }, 3000);
  });
};
