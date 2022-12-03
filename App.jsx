import 'react-native-gesture-handler';

import {View, TouchableOpacity, Text} from 'react-native';

import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/Settings';
import FavouritesScreen from './src/screens/Favourites';
import MapScreen from './src/screens/Map';
import FiltersScreen from './src/screens/Filters';

import Colors from './src/assets/Colors';
import HomeStack from './src/screens/HomeStack';

const firstPageHeaderLogo = require('./src/assets/images/Logo.png');

const Stack = createNativeStackNavigator();
const MapStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

/*
const HomeStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        keyboardHidesTabBar: true,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};
*/

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#172e05',
          },
          tabBarHideOnKeyboard: true,

          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'grid' : 'grid';
              return <Feather name={iconName} size={30} color="white" />;
            } else if (route.name === 'Map') {
              iconName = focused ? 'map-marked-alt' : 'map-marked-alt';
              return <FontAwesome5 name={iconName} size={30} color="white" />;
            } else if (route.name === 'Favourites') {
              iconName = focused ? 'hearto' : 'hearto';
              return <AntDesign name={iconName} size={30} color="white" />;
            } else if (route.name === 'Settings') {
              iconName = focused ? 'gear' : 'gear';
              return <EvilIcons name={iconName} size={35} color="white" />;
            }
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{
            title: 'My favourites',
            headerTitleAlign: 'center',
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerTitleAlign: 'center',
            tabBarStyle: {
              display: 'none',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

/*


<Tab.Screen
          name="Favourites"
          component={FavouritesScreen}
          options={{headerShown: true, tabBarStyle: {display: 'none'}}}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: true, tabBarStyle: {display: 'none'}}}
        />
*/

export default App;
