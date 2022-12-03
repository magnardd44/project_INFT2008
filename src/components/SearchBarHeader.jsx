import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchBarHeader = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '80%',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginVertical: 20,
            marginLeft: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 20,
            height: 40,
          }}>
          <AntDesign name="search1" size={20} />
          <TextInput
            placeholder="Søk"
            style={{
              width: '100%',
              borderRadius: 5,
              paddingRight: 10,
            }}
          />
        </View>
        <TouchableOpacity>
          <Entypo name="menu" size={40} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 5}}></View>
    </>
  );
};

export default SearchBarHeader;

const styles = StyleSheet.create({});
