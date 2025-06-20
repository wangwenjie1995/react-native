import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { TabParamList } from '../../navigation/type';

const Tab = createBottomTabNavigator<TabParamList>();

function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed页面</Text>
        </View>
    );
}

function Messages() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Messages页面</Text>
        </View>
    );
}

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Messages" component={Messages} />
        </Tab.Navigator>
    );
}