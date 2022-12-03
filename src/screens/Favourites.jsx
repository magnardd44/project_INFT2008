import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const FavouritesScreen = ({navigation}) => {
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

  return (
    <View>
      <Text>Favourites</Text>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({});
