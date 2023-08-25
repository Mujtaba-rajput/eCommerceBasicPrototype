import 'react-native-gesture-handler';
import React from 'react';
import MainNavigation from './navigation';
import { Provider } from 'react-redux';
import { store } from './lib/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
