import React from 'react';
import { Dimensions, Image, Text, View, ViewProps } from "react-native";
import {ThemeContext} from '../themes';

type Props = {
  novel: Unmei.NovelType
}

type State = {
  logoHeight: number
}

class NovelCard extends React.Component<Props, State> {
  static contextType = ThemeContext;
  state: State = {
    logoHeight: 0
  }

  componentDidMount() {
    Image.getSize(this.props.novel.image, (w, h) => {
      const ration = Dimensions.get('window').width/w;
      this.setState({ logoHeight: h*ration})
    });
  }

  render() {
    const theme: Unmei.ThemeContext = this.context;
    const { novel } = this.props;
    novel.release_date = new Date(novel.release_date);
    return (
      <View style={{ backgroundColor: theme.secondaryBackground, marginTop: 4, marginBottom: 4, padding: 2 }}>
        <Image source={{ uri: novel.image, cache: 'only-if-cached' }} resizeMode={'contain'} style={{ width: '100%', height: this.state.logoHeight }} />
        <Text style={{ color: theme.text, fontSize: 18, fontWeight: '700' }}>{novel.localized_name.length > 0 ? novel.localized_name : novel.original_name}</Text>
      </View>
    );
  }
}

export default NovelCard;
