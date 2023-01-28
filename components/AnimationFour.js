import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AnimationFour = () => {
  return (
    <View style={styles.container}>
      <Lottie source={require('../animation.json')} autoPlay loop />
      <TouchableOpacity>
        <View
          style={[
            {
              position: 'absolute',
              bottom: '100%',
              right: '100%',
              height: 200,
              width: 200,
              top: 0,
              left: 0,
              backgroundColor: 'red',
            },
          ]}>
          {/* <Lottie source={require('../add.json')} autoPlay loop /> */}
          <Text style={{color: 'green'}}>adasda</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AnimationFour;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
});
