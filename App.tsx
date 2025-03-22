import React from 'react';
import { ThemeProvider} from './src/theme/ThemeContext';
import AuthScreen from './src/screens/Auth/Auth';
import { NavigationContainer } from '@react-navigation/native';

export default function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthScreen />
      </ThemeProvider>
    </NavigationContainer>
  );
}
