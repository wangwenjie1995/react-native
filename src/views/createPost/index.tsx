import { StackScreenProps } from "@react-navigation/stack";
import { useState } from "react";
import { TextInput } from "react-native";
import { Button } from "react-native-elements";
import { RootStackParamList } from "../../navigation/type";

type props = StackScreenProps<RootStackParamList, 'CreatePost'>;

export default function CreatePost({ navigation }: props) {
    const [postText, setPostText] = useState('')
    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }} value={postText}
                onChangeText={setPostText}>
            </TextInput>
            <Button
                title="Clear button"
                type="clear"
            />
            <Button
                title="Done"
                onPress={() => {
                    navigation.navigate('Home', { post: postText });
                }}
            />
        </>
    );
}