import { StatusBar, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './rn/src/views/home'

export default function App2() {
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

