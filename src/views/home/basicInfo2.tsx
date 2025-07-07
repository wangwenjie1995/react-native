// 右侧配图帖子组件
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

interface RightImagePostCardProps {
    username: string
    time: string
    content: string
    likes: number
    imageUrl: string
    onLike: () => void
}
const RightImagePostCard = ({ username, time, content, likes, imageUrl, onLike }: RightImagePostCardProps) => {
    return (
        <View style={styles.card}>
            <View style={styles.contentContainer}>
                <Text style={styles.content}>{content}</Text>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.rightImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.footer}>
                <View style={styles.bioTechInfo}>
                    <Text style={styles.bioTechText}>生物科技 0.61%</Text>
                    <Text style={[styles.bioTechText, { color: '#ff4d4f' }]}>生物科技 -1.21%</Text>
                </View>
            </View>
            <View style={styles.header}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.time}>{time}</Text>
                <TouchableOpacity onPress={onLike} style={styles.likeButton}>
                    {/* <Ionicons name="heart-outline" size={20} color="#666" /> */}
                    23
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
        justifyContent: 'flex-start',
        marginBottom: 12,
        fontSize: 15,
        fontWeight: 500,
        color: '#333333',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    time: {
        color: '#999',
        fontSize: 14,
    },
    contentContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    content: {
        fontSize: 15,
        lineHeight: 22,
        flex: 1,
        paddingRight: 12,
    },
    rightImage: {
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

export default RightImagePostCard;