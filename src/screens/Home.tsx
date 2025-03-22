import { StatusBar, Text, View } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { createGlobalStyles, darkTheme } from '../theme/themes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme === darkTheme ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <Text style={styles.text}>Home</Text>
      </SafeAreaView>
    </View>
  );
}
