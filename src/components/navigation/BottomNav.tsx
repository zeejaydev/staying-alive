import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import FontAwesome from '@react-native-vector-icons/fontawesome';

const Tab = createBottomTabNavigator();

export default function BottomNav() {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ focused }) => {
        return <FontAwesome
          name={route.name === 'Home' ? 'home' : 'user'}
          color={focused ? 'white' : 'gray'}
          size={20}
        />;
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        elevation: 0,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 40,
        borderTopWidth: 0,
        backgroundColor: '#000',
        height: 65,
      },
    })}>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}
