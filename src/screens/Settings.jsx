import {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Switch,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [isDarkmode, setIsDarkmode] = useState(false);
  const toggleSwitch = () => changeTheme();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <View
            style={{
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Ionicons name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@preffered_color');
      const val = JSON.parse(jsonValue);
      console.log(val['fargevalg']);
      setIsDarkmode(val['fargevalg']);
    } catch (e) {
      console.error(e);
    }
  };

  const changeTheme = async () => {
    setIsDarkmode(previousState => !previousState);

    try {
      const jsonValue = JSON.stringify({fargevalg: isDarkmode});
      await AsyncStorage.setItem('@preffered_color', jsonValue);
      console.log('Fargevalget er lagret!');
    } catch (e) {
      console.error(e);
    }
  };

  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      backgroundColor: isDarkmode ? 'black' : 'white',
      paddingHorizontal: 20,
    },
    headerDefaultView: {
      height: '50%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    headerText: {
      fontSize: 30,
      textAlign: 'center',
      color: isDarkmode ? 'white' : 'black',
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 20,
    },
  });

  const Row = ({text}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            fontWeight: '700',
            color: isDarkmode ? 'white' : 'black',
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          backgroundColor: isDarkmode ? 'black' : 'white',
          paddingTop: 30,
        }}>
        <Text style={styles.headerText}>Mer</Text>
      </View>
      <View
        style={{
          flex: 8,
          width: '100%',
          backgroundColor: isDarkmode ? 'black' : 'white',
        }}>
        <Row text={'Om Norsk Tipping'} />
        <Row text={'Kundeservice'} iconName="customerservice" />
        <Row text={'Gi tilbakemelding'} />
        <Row text={'Spilleregler og betingelser'} />
        <Row text={'Personvern'} />
        <View
          style={{
            width: '100%',
            marginTop: 10,
            height: 130,
            backgroundColor: isDarkmode ? 'darkgreen' : 'lightgreen',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: isDarkmode ? 'lightgreen' : 'darkgreen',
              marginLeft: 15,
              fontWeight: '600',
              marginTop: 20,
            }}>
            Hjelpelinjen
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: isDarkmode ? 'lightgreen' : 'darkgreen',
              marginLeft: 15,
              fontWeight: '600',
            }}>
            Er spill blitt et problem?
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#BFE9D3',
              width: '30%',
              borderRadius: 5,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 15,
            }}>
            <Text style={{color: 'darkgreen', fontSize: 15, fontWeight: '600'}}>
              hjelpelinjen.no
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text style={{fontSize: 20, color: isDarkmode ? 'white' : 'black'}}>
              Endre lysinnstilling
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}>
            <FeatherIcon
              name="sun"
              style={{marginHorizontal: 10}}
              size={30}
              color={isDarkmode ? 'white' : 'black'}
            />
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isDarkmode ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={changeTheme}
              value={isDarkmode}
            />
            <Octicons
              name="moon"
              style={{marginHorizontal: 10}}
              size={30}
              color={isDarkmode ? 'white' : 'black'}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
