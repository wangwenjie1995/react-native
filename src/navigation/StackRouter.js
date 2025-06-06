import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar, View, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function SafeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor="#61dafb" />
        <View>
          <Text>SafeScreen</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="SafeScreen">
      <Stack.Screen
          name="Home"
          component={HomeScreen}
      />
      <Stack.Screen
          name="SafeScreen"
          component={SafeScreen}
      />
    </Stack.Navigator>
  );
}