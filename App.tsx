import React from 'react';
import { ThemeProvider} from './src/theme/ThemeContext';
import { Auth } from './src/screens/Auth/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Auth />
      </ThemeProvider>
    </NavigationContainer>
  );
}
