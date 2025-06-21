// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './navigation/StackRouter';
import { ThemeProvider } from 'react-native-elements';

function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackRouter></StackRouter>
      </NavigationContainer>
    </ThemeProvider>

  );
}

export default App;
