import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { createGlobalStyles, darkTheme } from '../../theme/themes';
import { useAuthVM } from './authVM';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import HomeScreen from '../Home';

const Stack = createNativeStackNavigator();

export default function AuthScreen() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { loading, user } = useAuthVM();

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={theme === darkTheme ? 'light-content' : 'dark-content'} />
        <SafeAreaView>
          <Text style={styles.text}>Loading...</Text>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <Stack.Navigator>
        {user === null ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        )}
      </Stack.Navigator>
  );
}
