import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import Home from '../views/home';
import SafeScreen from '../views/safeScreen';
import ListScreen from '../views/listScreen';
import CreatePost from '../views/createPost';
import TabNavigation from '../views/tabNavigation';

// 根据平台选用 navigator
const Stack =
  Platform.OS === 'web' ? createStackNavigator() : createNativeStackNavigator();

export default function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '首页',
        }}>
        {/* {props => <HomeScreen {...props} />} */}
      </Stack.Screen>
      <Stack.Screen name="SafeScreen" component={SafeScreen} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
