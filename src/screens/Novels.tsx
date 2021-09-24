import React from "react";
import { Text, View } from "react-native";
import { fetchNovels } from "../api/novels";
import NovelCard from "../ui/NovelCard";

type State = {
  novels: Unmei.NovelType[]
}

class Novels extends React.Component<any, State> {
  state: State = {
    novels: []
  }

  componentDidMount() {
    fetchNovels().then(novels => {
      this.setState({ novels });
    });
  }

  render() {
    const { novels } = this.state;
    return (
      <View>
        {novels.map(novel => (
          <NovelCard key={novel.id} novel={novel}/>
        ))}
      </View>
    );
  }
}

export default Novels;
