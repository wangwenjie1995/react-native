import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ListScreen() {
    return (
        <ScrollView>
            <Button title="222"></Button>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.itemBase}>Home1</Text>
                <Text style={styles.itemBase}>Home2</Text>
                <Text style={styles.itemBase}>Home3</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        margin: 10,
        borderWidth: 10,
        borderColor: 'black',
        color: 'red',
    },
    itemBase: {
        height: 30,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#dfb',
        padding: 4,
        textAlign: 'center'
    },
    flexColumn: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
})