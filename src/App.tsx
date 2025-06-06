// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackRouter from './navigation/StackRouter';

function App() {
  return (
    <NavigationContainer>
      <StackRouter></StackRouter>
    </NavigationContainer>
  );
}

export default App;
