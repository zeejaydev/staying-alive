import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createGlobalStyles } from '../theme/themes';
import { useTheme } from '../theme/ThemeContext';
import { useAuthVM } from './Auth/authVM';


export default function ProfileScreen () {
  const { theme } = useTheme();
  const styles = createGlobalStyles(theme);
  const { handleLogOut } = useAuthVM();
  return(
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.text}>Profile</Text>
        <Button onPress={handleLogOut} title='Signout'></Button>
      </SafeAreaView>
    </View>
  );
}
