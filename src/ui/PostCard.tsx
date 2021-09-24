import React from 'react';
import { Text, View, ViewProps } from "react-native";
import {ThemeContext} from '../themes';

type Props = {
    post: Unmei.PostType
}

class PostCard extends React.Component<Props, any> {
    static contextType = ThemeContext;

    render() {
        const theme: Unmei.ThemeContext = this.context;
        const { post } = this.props;
        post.date = new Date(post.date);
        return (
            <View style={{ backgroundColor: theme.secondaryBackground, marginTop: 4, marginBottom: 4, padding: 2 }}>
                <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700' }}>{post.title}</Text>
                <Text style={{ color: theme.text }}>{post.short_post}</Text>
                <View style={{ borderTopWidth: 1, borderTopColor: theme.text, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: theme.text }}>{`Автор: ${post.author}`}</Text>
                    <Text style={{ color: theme.text }}>{`Дата: ${post.date.toLocaleDateString()}`}</Text>
                </View>
            </View>
        );
    }
}

export default PostCard;
