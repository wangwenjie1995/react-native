import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './views/home'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#61dafb" />
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

