import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/NavigationTypes';

import React, { useEffect, useRef, useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const BirthScreen = () => {
  const monthRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  // Properly type the navigation
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Load saved registration progress
  useEffect(() => {
    getRegistrationProgress("Birth").then((progressData) => {
      if (progressData) {
        const { dateOfBirth } = progressData;
        const [dayValue, monthValue, yearValue] = dateOfBirth.split("/");
        setDay(dayValue);
        setMonth(monthValue);
        setYear(yearValue);
      }
    });
  }, []); // Added dependency array to avoid running every render

  const handleNext = () => {
    if (day.trim() !== '' && month.trim() !== '' && year.trim() !== '') {
      const dateOfBirth = `${day}/${month}/${year}`; // Fixed template string
      saveRegistrationProgress("Birth", { dateOfBirth }); // Correct key name
      navigation.navigate('Location'); // Navigate to the next screen
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
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
        <Text style={styles.headingText}>What's your birth date?</Text>
        <View style={styles.inputRow}>
          <TextInput
            autoFocus
            placeholder="DD"
            maxLength={2}
            keyboardType="numeric"
            value={day}
            onChangeText={(text) => {
              setDay(text);
              if (text.length === 2) {
                monthRef.current?.focus(); // Automatically focus the month input
              }
            }}
            style={styles.input}
          />
          <TextInput
            ref={monthRef}
            placeholder="MM"
            maxLength={2}
            keyboardType="numeric"
            value={month}
            onChangeText={(text) => {
              setMonth(text);
              if (text.length === 2) {
                yearRef.current?.focus(); // Automatically focus the year input
              }
            }}
            style={styles.input}
          />
          <TextInput
            ref={yearRef}
            placeholder="YYYY"
            maxLength={4}
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.8} style={{ marginTop: 30, marginLeft: 'auto' }}>
          <MaterialCommunityIcons
            style={{ alignSelf: 'center', marginTop: 20 }}
            name="arrow-right-circle"
            size={45}
            color="#581845"
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
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
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
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 10,
    width: 70,
    fontSize: 22,
    textAlign: 'center',
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
});

export default BirthScreen;
