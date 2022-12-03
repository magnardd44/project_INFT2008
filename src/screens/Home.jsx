import {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  Dimensions,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBarHeader from '../components/SearchBarHeader';

const backgroundImage = require('../assets/images/bg_default_mobile.png');

import useFetchProducts from '../hooks/fetchProducts';

export default function HomeScreen({navigation}) {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const {products, loading, error} = useFetchProducts('produkter');

  /*
  useEffect(() => {
    const getData = async () => {
      //setLoading(true);
      try {
        const jsonValue = await AsyncStorage.getItem('@preffered_color');
        const val = JSON.parse(jsonValue);
        console.log(val['fargevalg']);
        setIsDarkmode(val['fargevalg']);
        //setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation, isDarkmode]);
  */

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const colors = {
    login: isDarkmode ? 'rgb(253,192,3)' : 'rgb(255, 153, 52)',
    background: isDarkmode ? 'white' : 'rgb(64,64,64)',
    light: isDarkmode ? 'white' : 'rgb(64,64,64)',
    dark: isDarkmode ? 'rgb(64,64,64)' : 'white',
    footerCardBackground: isDarkmode ? 'rgb(212,16,64)' : 'rgb(204, 102, 0)',
    cardColor: isDarkmode ? 'white' : 'rgb(64,64,64)',
    topCardBackgroundColor: isDarkmode ? 'white' : 'rgb(64,64,64)',
  };

  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <>
      <SearchBarHeader />
      <ScrollView contentContainerStyle={styles.container}>
        {loading || products.length === 0 ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator color={'black'} />
          </View>
        ) : (
          <>
            <Text>Home</Text>
            <StatusBar barStyle={'dark-content'} />
          </>
        )}
      </ScrollView>
    </>
  );
}
