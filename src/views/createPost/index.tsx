import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function CreatePost({ navigation, route }) {
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
                title="Done"
                onPress={() => {
                    navigation.navigate({
                        name: 'Home',
                        params: { post: postText },
                        merge: true,
                    });
                }}
            >
            </Button>
        </>
    );
}