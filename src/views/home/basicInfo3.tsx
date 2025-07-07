// 底部多图帖子组件 (树根、落叶和沙地)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

interface MultiImagePostCardProps {
    username: string
    time: string
    content: string
    likes: number
    images: string[]
    onLike: () => void
}
const MultiImagePostCard = ({ username, time, content, likes, images, onLike }: MultiImagePostCardProps) => {
    return (

        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>

            <Text style={styles.content}>{content}</Text>

            <FlatList
                data={images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item }}
                        style={styles.bottomImage}
                        resizeMode="cover"
                    />
                )}
                contentContainerStyle={styles.imageContainer}
            />

            <View style={styles.footer}>
                <View style={styles.bioTechInfo}>
                    <Text style={styles.bioTechText}>生物科技 0.61%</Text>
                    <Text style={[styles.bioTechText, { color: '#ff4d4f' }]}>生物科技 -1.21%</Text>
                </View>

                <TouchableOpacity onPress={onLike} style={styles.likeButton}>
                    {/* <Ionicons name="heart-outline" size={20} color="#666" /> */}
                    3
                    <Text style={styles.likeCount}>{likes}</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    time: {
        color: '#999',
        fontSize: 14,
    },
    content: {
        fontSize: 15,
        lineHeight: 22,
        marginBottom: 12,
    },
    imageContainer: {
        gap: 8,
        marginBottom: 16,
    },
    bottomImage: {
        width: 100,
        height: 80,
        borderRadius: 6,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bioTechInfo: {
        flexDirection: 'row',
        gap: 12,
    },
    bioTechText: {
        fontSize: 14,
        color: '#666',
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    likeCount: {
        fontSize: 14,
        color: '#666',
    },
});

export default MultiImagePostCard;