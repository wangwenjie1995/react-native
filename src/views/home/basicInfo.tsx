// src/views/home/basicInfo.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
interface Tag {
    name: string
    value: number
}
interface SimplePostCardProps {
    username: string
    avatarUrl: string
    time: string
    title: string
    likes: number
    tags: Tag[]
    onLike: () => void
}

const SimplePostCard = ({ username, time, title, likes, tags, avatarUrl, onLike }: SimplePostCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.content}>
                {tags.map((item, index) => (
                    <View key={index} style={styles.tagContainer}>
                        <Text style={styles.tagText}>{item.name}</Text>
                        <Text style={[
                            styles.tagText,
                            styles.tagValue,
                            item.value > 0 ? styles.positive : styles.negative
                        ]}>
                            {item.value > 0 ? '+' : ''}{item.value}%
                        </Text>
                    </View>
                ))}
            </View>
            <View style={styles.footer}>
                <View style={styles.leftContent}>
                    {/* 圆形头像 */}
                    <Image
                        source={{ uri: avatarUrl }}
                        style={styles.avatar}
                        defaultSource={require('./avatar.jpeg')}
                    />
                    {/* 用户名和时间 */}
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <TouchableOpacity onPress={onLike} style={styles.likeButton}>
                    <Text style={styles.likeIcon}>♥</Text>
                    <Text style={styles.likeCount}>{likes}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    footer: {
        marginTop: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 15,
        height: 15,
        borderRadius: 7.5, // 圆形半径
        backgroundColor: '#DDD', // 默认灰色背景，您可以用图片替换
        marginRight: 4,
    },
    username: {
        fontSize: 11,
        lineHeight: 15,
        color: '#3D3D3D',
        marginRight: 5,
    },
    time: {
        color: '#AAAAAA',
        fontSize: 10,
        lineHeight: 15,
    },
    title: {
        fontSize: 15,
        lineHeight: 21,
        marginBottom: 10,
        color: '#333333',
        fontWeight: 500,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    tagContainer: {
        flexDirection: 'row',
        height: 18,
        borderRadius: 2,
        backgroundColor: '#F5F6F6',
        alignItems: 'center',
        paddingHorizontal: 5,
        fontSize: 11,
    },
    tagText: {
        fontSize: 11,
        color: '#666',
    },
    tagValue: {
        fontSize: 11,
        marginLeft: 5, // 名称和数值之间的间距
    },
    positive: {
        color: '#ED4936', // 正数红色
    },
    negative: {
        color: '#17B03E', // 负数绿色
    },
    likeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    likeIcon: {
        fontSize: 11,
        color: '#AAAAAA',
    },
    likeCount: {
        fontSize: 11,
        lineHeight: 15,
        color: '##AAAAAA',
    },
});

export default SimplePostCard;