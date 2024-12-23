import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RootStackParamList } from '../navigation/NavigationTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const GenderScreen = () => {
  const [gender, setGender] = useState<string>(''); // State to store selected gender
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Load saved gender from storage
  useEffect(() => {
    getRegistrationProgress('Gender').then((progressData) => {
      if (progressData) {
        setGender(progressData.gender || '');
      }
    });
  }, []);

  const handleNext = () => {
    if (gender.trim() !== '') {
      saveRegistrationProgress('Gender', { gender });
      navigation.navigate('Dating'); // Navigate to the next screen
    } else {
      console.log('Please select a gender'); // Can add a toast/alert here
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* Header Section */}
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="info" size={28} color="black" />
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={28}
            color="black"
            style={styles.dotsIcon}
            accessibilityLabel="Options Menu"
            accessible
          />
        </View>

        {/* Heading */}
        <Text style={styles.headingText}>What's your Gender?</Text>
        <Text style={styles.subText}>
          Users are matched based on these gender groups.
        </Text>

        {/* Gender Options */}
        <View style={styles.optionContainer}>
          <Pressable
            style={styles.genderOption}
            onPress={() => setGender('Male')} // Update state
          >
            <Text style={styles.genderText}>Male</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={gender === 'Male' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
          <Pressable
            style={styles.genderOption}
            onPress={() => setGender('Female')} // Update state
          >
            <Text style={styles.genderText}>Female</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={gender === 'Female' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
        </View>

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
    padding: 20,
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
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subText: {
    fontSize: 15,
    marginTop: -5,
    color: 'gray',
  },
  optionContainer: {
    marginTop: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  genderText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  nextButton: {
    marginTop: 30,
    marginLeft: 'auto',
  },
});

export default GenderScreen;
