import { Button, StatusBar, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles, darkTheme } from '../theme/themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthVM } from './Auth/authVM';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { handleLogOut } = useAuthVM();
  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme === darkTheme ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <Text style={styles.text}>Home</Text>
        <Button title="Sign Out" onPress={handleLogOut} />
      </SafeAreaView>
    </View>
  );
}
