import React from 'react';
import {Dispatch} from 'redux';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import colors from 'src/resources/theme/colors';
import language from 'src/resources/i18n';

import styles from './styles';
import {connect} from 'react-redux';
import {Store} from 'src/@types/store';
import {getSearchTerm} from 'src/store/cocktails/selector';
import {CocktailsActions} from 'src/store/cocktails/types';
import {setSearchTerm} from 'src/store/cocktails/actions';

interface SearchHeaderProps {
  value: string;
  onSearchChange(value: string): void;
  onBackPress?(): void;
}

class SearchHeader extends React.Component<SearchHeaderProps> {
  cancelSearch = () => this.props.onSearchChange('');

  render() {
    const {value, onSearchChange, onBackPress} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress} style={styles.leftButton}>
          <Icon name="arrow-left" color={colors.mineShaft} size={20} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            color={colors.spunPearl}
            size={12}
            style={styles.searchIcon}
          />
          <TextInput
            value={value}
            onChangeText={onSearchChange}
            underlineColorAndroid={'transparent'}
            selectionColor={colors.ceriseRed}
            placeholder={language.search}
            placeholderTextColor={colors.spunPearl}
            style={styles.input}
          />
        </View>
        {value ? (
          <TouchableOpacity
            onPress={this.cancelSearch}
            style={styles.rightButton}>
            <View>
              <Text style={styles.cancelButton}>{language.cancel}</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = (state: Store) => ({value: getSearchTerm(state)});

const mapDispatchToProps = (dispatch: Dispatch<CocktailsActions>) => ({
  onSearchChange: (value: string) => setSearchTerm(value)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
