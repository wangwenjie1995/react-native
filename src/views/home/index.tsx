import { StackScreenProps } from '@react-navigation/stack';
import {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import { RootStackParamList } from '../../navigation/type';

type props = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation, route}: props) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>route:{JSON.stringify(route)}</Text>
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Button
        onPress={() =>
          navigation.setOptions({
            title: '已经修改了HOME页面的title',
            headerRight: () => <Button title="Setting"></Button>,
          })
        }
        title="修改了HOME页面的title"></Button>
      <Button
        onPress={() => navigation.navigate('SafeScreen', {name: 'SafeScreen'})}
        title="SafeScreen页面"></Button>
      <Button
        onPress={() => navigation.navigate('ListScreen', {name: 'ListScreen'})}
        title="ListScreen页面"></Button>
      <Button
        onPress={() => navigation.navigate('CreatePost', {name: 'CreatePost'})}
        title="CreatePost页面"></Button>
      <Button
        onPress={() => navigation.navigate('TabNavigation', {screen: 'Feed'})}
        title="TabNavigation页面"></Button>
    </View>
  );
}
