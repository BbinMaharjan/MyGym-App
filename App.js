import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigations/MainNavigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
