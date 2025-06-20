import type {
  CompositeScreenProps, // 用于组合两个导航器的 props 类型（比如嵌套导航）
  NavigatorScreenParams, // 用于嵌套路由时传递子导航器参数
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack'; // Stack 导航器的 screen props 类型
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'; // Tab 导航器的 screen props 类型

// 主导航栈的参数列表
export type RootStackParamList = {
  Home: { post?: string };
  SafeScreen: { name?: string };
  ListScreen: { name?: string };
  CreatePost: { name?: string };
  TabNavigation: NavigatorScreenParams<TabParamList>;
};

// 这个是一个泛型工具类型，用来为 RootStackParamList 中的每个页面自动生成 navigation, route 类型。
// 比如在 PostDetails 页面中使用：
// 自动获得：navigation.navigate('PostDetails', { id: 'xxx' })
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type TabParamList = {
  Feed: undefined; // Feed 页面没有参数
  Messages: undefined; // Messages 页面没有参数
};

export type HomeTabScreenProps<T extends keyof TabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>, // 当前 tab 的 props
    RootStackScreenProps<keyof RootStackParamList> // 外层 stack 的 props（导航能力合并）
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
