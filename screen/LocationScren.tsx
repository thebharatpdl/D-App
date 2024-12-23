import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { Marker, LatLng } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { saveRegistrationProgress } from '../registrationUtils';

const LocationScreen = () => {
  const [markerPosition, setMarkerPosition] = useState<LatLng>({
    latitude: 13.0451,
    longitude: 77.6269,
  });

  const [location, setLocation] = useState('Drag the marker to set location');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleDragEnd = (e: any) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setMarkerPosition({ latitude, longitude });
    setLocation(`Lat: ${latitude.toFixed(5)}, Lng: ${longitude.toFixed(5)}`);
  };

  const handleNext = () => {
saveRegistrationProgress("Location",{location})
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Header */}
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Entypo name="location-pin" size={32} color="black" />
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={28}
            color="black"
            style={styles.dotsIcon}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Where do you live?</Text>

        {/* Map with Draggable Marker */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: markerPosition.latitude,
            longitude: markerPosition.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.02,
          }}
          onPress={(e) => handleDragEnd(e)} // Allow changing marker position on map press
        >
          <Marker
            draggable
            coordinate={markerPosition}
            onDragEnd={handleDragEnd} // Update position on drag
          >
            <View>
              <Text style={styles.markerText}>{location}</Text>
            </View>
          </Marker>
        </MapView>

        {/* Next Button */}
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={styles.nextButton}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="#581845"
            style={{ alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentWrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 25,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsIcon: {
    marginLeft: 20,
  },
  map: {
    width: '100%',
    height: 400,
    marginTop: 20,
    borderRadius: 5,
  },
  markerText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 2,
    borderRadius: 4,
  },
  nextButton: {
    marginTop: 30,
    marginLeft: 'auto',
  },
});

export default LocationScreen;
