import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from '../navigation/NavigationTypes';
import { getRegistrationProgress, saveRegistrationProgress } from '../registrationUtils';

const DatingType = () => {
  const [type, setType] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

 useEffect(() => {
    getRegistrationProgress('Dating').then((progressData) => {
      if (progressData) {
        setType(progressData.type || '');
      }
    });
  }, []);

  const handleNext = () => {
    if(type.trim()!==''){
saveRegistrationProgress('Dating',{type});
   
}
    navigation.navigate('PreFinal'); // This now works with TypeScript correctly
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="hearto" size={28} color="black" />
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
        <Text style={styles.headingText}>What's your dating intention?</Text>
        <Text style={styles.subText}>
          Users are matched based on these options.
        </Text>

        {/* Gender Options */}
        <View style={styles.optionContainer}>
          <Pressable
            style={styles.genderOption}
            onPress={() => setType('Casual Dating')}
          >
            <Text style={styles.genderText}>Casual Dating</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={type === 'Casual Dating' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
          <Pressable
            style={styles.genderOption}
            onPress={() => setType('Long-Term Relationships')}
          >
            <Text style={styles.genderText}>Long-Term Relationships</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={type === 'Long-Term Relationships' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
          <Pressable
            style={styles.genderOption}
            onPress={() => setType('Friendship')}
          >
            <Text style={styles.genderText}>Friendship</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={type === 'Friendship' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
          <Pressable
           style={styles.genderOption}
            onPress={() => setType('Others')}
          >
            <Text style={styles.genderText}>Others</Text>
            <FontAwesome
              name="circle"
              size={28}
              color={type === 'Others' ? '#581845' : '#F0F0F0'}
            />
          </Pressable>
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
});
export default DatingType;