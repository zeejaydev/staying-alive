import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createGlobalStyles } from '../theme/themes';
import { useTheme } from '../theme/ThemeContext';


export default function ProfileScreen () {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);

  return(
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Profile</Text>
      </SafeAreaView>
    </View>
  );
}
