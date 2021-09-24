import React from 'react';

const darkTheme: Unmei.ThemeContext = {
    text: '#efefef',
    secondaryText: '#aaa',
    linkText: '#ccc',

    mainBackground: '#121212',
    secondaryBackground: '#191919',
    blockBackground: '#212121',
    secondaryBlockBackground: '#121212',
    navbarBackground: '#0b0b0b',
};
const ThemeContext = React.createContext(darkTheme);

export { darkTheme, ThemeContext };
