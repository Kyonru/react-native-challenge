import React from 'react';
import {Provider} from 'react-redux';

import AppContainer from 'src/navigation';
import {store} from 'src/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
