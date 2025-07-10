import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { RootStackParamList } from '../../navigation/type';
import SimplePostCard from './basicInfo';
import RightImagePostCard from './basicInfo2';
import MultiImagePostCard from './basicInfo3';

type props = StackScreenProps<RootStackParamList, 'Home'>;

export default function Home({ route }: props) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);
  const handleLike = (postId: number) => {
    console.log('Liked post:', postId);
    // 这里添加点赞逻辑
  };
  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      {/* <Text>Home Screen</Text>
      <Text>route:{JSON.stringify(route)}</Text>
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        onPress={() =>
          navigation.setOptions({
            title: '已经修改了HOME页面的title',
            headerRight: () => <Button title="Setting"></Button>,
          })
        }
        title="修改了HOME页面的title"></Button>
      <Button
        onPress={() => navigation.navigate('SafeScreen', { name: 'SafeScreen' })}
        title="SafeScreen页面"></Button>
      <Button
        onPress={() => navigation.navigate('ListScreen', { name: 'ListScreen' })}
        title="ListScreen页面"></Button>
      <Button
        onPress={() => navigation.navigate('CreatePost', { name: 'CreatePost' })}
        title="CreatePost页面"></Button>
      <Button
        onPress={() => navigation.navigate('TabNavigation', { screen: 'Feed' })}
        title="TabNavigation页面"></Button> */}
      <SimplePostCard
        avatar='xxx'
        username="常逸静"
        time="3小时前"
        title="生态环境保护是一个长期任务，要久久为功，常态化监管守护饮食安全"
        tags={[{ name: '生物科技', value: 0.61 }, { name: '生物科技', value: -1.21 }]}
        likes={19}
        onLike={() => handleLike(1)}
      />

      <RightImagePostCard
        username="昂扬股评"
        time="3小时前"
        title="生态环境保护是一个长期任务，要久久为功，常态化监管守护饮食安全"
        likes={88}
        avatar="https://example.com/grassland.jpg"
        image="https://example.com/grassland.jpg"
        tags={[{ name: '生物科技', value: 0.61 }, { name: '生物科技', value: -1.21 }]}
        onLike={() => handleLike(2)}
      />
      <MultiImagePostCard
        username="史汉显"
        time="3小时前"
        title="生态环境保护是一个长期任务，要久久为功，常态化监管守护饮食安全"
        likes={29}
        avatar="https://example.com/grassland.jpg"
        tags={[{ name: '生物科技', value: 0.61 }, { name: '生物科技', value: -1.21 }]}
        images={[
          'https://example.com/tree-root.jpg',
          'https://example.com/fallen-leaves.jpg',
          'https://example.com/sand-land.jpg'
        ]}
        onLike={() => handleLike(3)}
      />
      {/* </View> */}
    </ScrollView>
  );
}
