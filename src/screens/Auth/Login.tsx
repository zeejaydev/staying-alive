import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { themeSizes } from '../../theme/themes';
import { useAuthVM } from './authVM';

export default function LoginScreen() {
  const image = { uri:'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg' };
  const { handleLogin } = useAuthVM();
  return (
    <ImageBackground source={image} resizeMode="cover" style={viewStyles.image}>
      <StatusBar barStyle={'light-content'}/>
        <LinearGradient
          colors={['transparent', 'white']}
          style={viewStyles.gradient}
        />
        <View style={viewStyles.bottomContainer}>
          <Text style= {viewStyles.title}>Wherever you are health is number one</Text>
          <TouchableOpacity
            style={viewStyles.button}
            onPress={handleLogin}>
              <Text style={viewStyles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const viewStyles = StyleSheet.create({
  button: {
    backgroundColor: '#212121',
    height: themeSizes.buttonHeight,
    borderRadius: themeSizes.buttonBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: themeSizes.titleMedium,
    fontWeight: 'bold',
  },
  title: {
    fontSize: themeSizes.titleDisplay,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    height: Dimensions.get('window').height / 2.5,
    width: '100%',
    borderWidth: 0,
  },
  bottomContainer: {
    padding: 40,
    backgroundColor:'white',
    gap: 20,
  }
});
