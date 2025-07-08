import ButtonSection from '@/conponents/(tabs)/schedule/ButtonSection';
import ScheduleTopBar from '@/conponents/(tabs)/schedule/ScheduleTopBar';
import Screen from '@/conponents/(tabs)/schedule/screens';
import Stepper from '@/conponents/(tabs)/schedule/Stepper';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  return (
    <>
      <ScheduleTopBar />
      <View style={styles.container}>
        <Stepper />
        <Screen  />
        <ButtonSection  />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7'
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  resetButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  resetText: {
    color: '#444',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#4DA6FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  nextText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

