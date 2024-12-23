import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Image */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image source={require('../src/profilepic.png')} style={styles.profileImage} />
        </View>
        <Text style={styles.name}>Dominik Martin</Text>
        <Text style={styles.bio}>
          Digital Product Designer, Motion Designer, Art Director ✯ Passionate about innovation,
          meticulous design, and the best global products.
        </Text>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Ionicons name="location" size={16} color="#aaa" />
            <Text style={styles.infoText}>Allgäu</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="language" size={16} color="#aaa" />
            <Text style={styles.infoText}>German, English</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="chatbubbles-outline" size={20} color="#000" />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="logo-instagram" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="close-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Interests Section */}
      <View style={styles.interestsSection}>
        <Text style={styles.sectionTitle}>INTERESTS</Text>
        <View style={styles.interestsRow}>
          {['Climate Change', 'Weightlifting', 'BBQ', 'Tacos', 'Stock Market'].map((interest, index) => (
            <View key={index} style={styles.interestChip}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'black',
  },
  profileSection: {
    alignItems: 'center',
    padding: 16,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 12,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#555', // Placeholder color
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  infoRow: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#aaa',
    marginLeft: 4,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  interestsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  interestsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interestChip: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    margin: 4,
  },
  interestText: {
    fontSize: 12,
    color: '#fff',
  },
});

export default ProfileScreen;
