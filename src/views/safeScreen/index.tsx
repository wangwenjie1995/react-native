import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView, StatusBar, View, Text, Button } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "../../navigation/type";

type props = StackScreenProps<RootStackParamList, 'SafeScreen'>;
export default function SafeScreen({ navigation, route }: props) {
    const { params } = route;
    return (
        <SafeAreaProvider>
            <SafeAreaView
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar backgroundColor="#61dafb" />

                <View>
                    <Text>SafeScreen</Text>
                    <Button
                        onPress={() => navigation.goBack()}
                        title="Go Back Last Page"></Button>
                    <Text>{params.name}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}