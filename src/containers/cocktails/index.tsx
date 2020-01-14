import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {Store} from 'src/@types/store';
import {Cocktail} from 'src/@types/cocktails';

import {
  getCocktailList as getCocktails,
  startLoading,
} from 'src/store/cocktails/actions';
import {
  getCocktailList,
  getSearchTerm,
  isCocktailListLoading,
} from 'src/store/cocktails/selector';
import {CocktailsActions} from 'src/store/cocktails/types';

import CocktailListItem from 'src/components/list-item/cocktail';
import EmptyState from 'src/components/empty-state';
import colors from 'src/resources/theme/colors';
import {witDebounce} from 'src/utils/timers';

import styles from './styles';

interface CocktailListProps {
  cocktails: Cocktail[];
  searchTerm: string;
  isLoading: boolean;
  getCocktails(value: string): Promise<Cocktail[]>;
  startLoading(): Promise<any>;
}

class CocktailListContainer extends React.Component<
  CocktailListProps,
  {isTyping: boolean}
> {
  state = {
    isTyping: false,
  };
  timeout: any;

  componentDidUpdate(pastProps: CocktailListProps) {
    if (pastProps.searchTerm !== this.props.searchTerm) {
      this.setState({isTyping: true});
      this.onRefresh();
    }
  }

  onRefresh = witDebounce(
    async () => {
      await this.props.getCocktails(this.props.searchTerm);
      this.setState({isTyping: false});
    },
    1000,
    false,
    true,
  );

  renderCocktail = ({item}: {item: Cocktail}) => {
    return <CocktailListItem {...item} />;
  };

  renderEmptyState = () => {
    if (this.state.isTyping) {
      return null;
    }

    return (
      <EmptyState
        term={this.props.searchTerm}
        firstRender={!this.props.searchTerm}
      />
    );
  };

  render() {
    const loading = this.state.isTyping || this.props.isLoading;
    return (
      <>
        {loading ? (
          <ActivityIndicator
            hidesWhenStopped
            animating={loading}
            size={'large'}
            color={colors.magicMint}
            style={StyleSheet.flatten([
              styles.loadingIndicator,
              {
                display: loading ? 'flex' : 'none',
              },
            ])}
          />
        ) : null}
        <FlatList
          refreshing={loading}
          ListEmptyComponent={this.renderEmptyState}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.onRefresh}
              tintColor={colors.magicMint}
              colors={[colors.magicMint]}
            />
          }
          extraData={[this.props, this.state.isTyping]}
          data={this.props.cocktails}
          renderItem={this.renderCocktail}
          keyExtractor={item => `${item.id}`}
        />
      </>
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
  startLoading: () => startLoading()(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CocktailListContainer);
