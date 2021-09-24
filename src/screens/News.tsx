import React from 'react';
import { View } from 'react-native';
import PostCard from '../ui/PostCard';
import {fetchNews} from "../api/news";

type State = {
    news: Unmei.PostType[]
}

class News extends React.Component<any, State> {
    state: State = {
        news: [],
    }

    componentDidMount() {
        fetchNews().then(news => {
            this.setState({ news });
        });
    }

    render() {
        const { news } = this.state;
        return (
            <View>
                {news.map(post => (
                    <PostCard post={post} key={post.id}/>
                ))}
            </View>
        );
    }
}

export default News;
