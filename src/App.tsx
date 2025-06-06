import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './views/home'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#61dafb" />
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </NavigationContainer>
  );
}

