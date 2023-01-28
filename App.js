import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import AnimationOne from './components/AnimationOne';
import AnimationTwo from './components/AnimationTwo';
import AnimationThree from './components/AnimationThree';
import AnimationFour from './components/AnimationFour';
import Modal from './components/Modal/Modal';

const App = () => {
  return <Modal isVisible={true} title={'Random Title'} />;
  return <AnimationFour />;
  return <AnimationThree />;
  return <AnimationTwo />;
  return <AnimationOne />;
};

export default App;

const styles = StyleSheet.create({});
