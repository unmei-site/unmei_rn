import React, { createRef, useContext, useEffect, useRef, useState } from "react";
import {
  Dimensions, LayoutChangeEvent,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme, View
} from "react-native";
import { Link, NativeRouter, Route } from "react-router-native";
import News from './src/screens/News';
import {ThemeContext} from './src/themes';
import Novels from "./src/screens/Novels";

const App: React.FC = () => {
  const theme = useContext(ThemeContext);
  const isDarkMode = useColorScheme() === 'dark';
  const [navbarHeight, setNavbarHeight] = useState(0);

  const measureView = (event: LayoutChangeEvent) => {
    setNavbarHeight(event.nativeEvent.layout.height);
  }

  return (
    <NativeRouter>
      <SafeAreaView style={{ backgroundColor: theme.mainBackground, position: 'relative', height: Dimensions.get('window').height }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: theme.mainBackground }} contentContainerStyle={{ paddingBottom: navbarHeight }}>
          <Route exact path={'/'} component={News}/>
          <Route path={'/novels'} component={Novels}/>
        </ScrollView>

        <View style={{
          backgroundColor: theme.navbarBackground, position: 'absolute', width: '100%', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
          height: 32,
        }} onLayout={measureView}>
          <Link to={'/'}>
            <Text style={{ color: theme.text, fontSize: 16 }}>Главная</Text>
          </Link>
          <Link to={'/novels'}>
            <Text style={{ color: theme.text, fontSize: 16 }}>Новеллы</Text>
          </Link>
        </View>
      </SafeAreaView>
  </NativeRouter>
  );
};

export default App;
