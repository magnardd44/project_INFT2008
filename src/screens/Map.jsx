import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import SearchBarHeader from '../components/SearchBarHeader';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function MapScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [markers, serMarkers] = useState([
    {
      coordinates: {
        latitude: 63.4180024350132,
        longitude: 10.433338621645655,
      },
      description: 'Punkt 1',
      title: 'Punkt 1',
    },
    {
      coordinates: {
        latitude: 63.424991721401575,
        longitude: 10.380981901864654,
      },
      description: 'Punkt 2',
      title: 'Punkt 2',
    },
    {
      coordinates: {
        latitude: 63.44489155353636,
        longitude: 10.437031387651853,
      },
      description: 'Punkt 3',
      title: 'Punkt 3',
    },
    {
      coordinates: {
        latitude: 63.440134831861805,
        longitude: 10.39864695811572,
      },
      description: 'Punkt 4',
      title: 'Punkt 4',
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {width: windowWidth, height: windowHeight},
  });

  return (
    <>
      <SearchBarHeader />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 63.41859206714274,
            longitude: 10.40588616866073,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
              />
            );
          })}
        </MapView>
      </View>
    </>
  );
}
