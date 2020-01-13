import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {Store} from 'src/@types/store';
import {Cocktail} from 'src/@types/cocktails';

import {getCocktailList as getCocktails} from 'src/store/cocktails/actions';
import {
  getCocktailList,
  getSearchTerm,
  isCocktailListLoading,
} from 'src/store/cocktails/selector';
import {CocktailsActions} from 'src/store/cocktails/types';

import CocktailListItem from 'src/components/list-item/cocktail';
import colors from 'src/resources/theme/colors';

interface CocktailListProps {
  cocktails: Cocktail[];
  searchTerm: string;
  isLoading: boolean;
  getCocktails(value: string): Promise<Cocktail[]>;
}

class CocktailListContainer extends React.Component<CocktailListProps> {
  componentDidUpdate(pastProps: CocktailListProps) {
    if (pastProps.searchTerm !== this.props.searchTerm) {
      this.props.getCocktails(this.props.searchTerm);
    }
  }

  onRefresh = () => {
    this.props.getCocktails(this.props.searchTerm);
  };

  renderCocktail = ({item}: {item: Cocktail}) => {
    return <CocktailListItem {...item} />;
  };

  render() {
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={this.onRefresh}
            tintColor={colors.white}
            colors={[colors.cinnabar]}
          />
        }
        data={this.props.cocktails}
        renderItem={this.renderCocktail}
        keyExtractor={item => `${item.id}`}
      />
    );
  }
}

const mapStateToProps = (state: Store) => ({
  cocktails: getCocktailList(state),
  searchTerm: getSearchTerm(state),
  isLoading: isCocktailListLoading(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CocktailsActions>) => ({
  getCocktails: (value: string) => getCocktails(value)(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CocktailListContainer);
