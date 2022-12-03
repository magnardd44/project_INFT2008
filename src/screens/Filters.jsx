import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import SearchBarHeader from '../components/SearchBarHeader';

const FiltersScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
        <Text>Filters</Text>
      </ScrollView>
    </>
  );
};

export default FiltersScreen;

const styles = StyleSheet.create({});
