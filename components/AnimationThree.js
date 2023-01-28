import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {PhoneCall} from 'react-native-feather';
import {Easing} from 'react-native-reanimated';

const AnimationThree = () => {
  return (
    <View style={styles.container}>
      {/* <MotiView
        from={{opacity: 0}}
        delay={6000}
        animate={{opacity: 1}}
        style={[
          StyleSheet.absoluteFillObject,
          {
            backgroundColor: 'blue',
            padding: 100,
          },
        ]}
        transition={{type: 'timing'}}>
        <Text style={{color: 'red'}}>AnimationThree</Text>
      </MotiView> */}
      <View style={[styles.dot, styles.center]}>
        {[...Array(3).keys()].map(index => (
          <MotiView
            from={{opacity: 0.7, scaleX: 1, scaleY: 1}}
            animate={{opacity: 0, scaleX: 4, scaleY: 4}}
            key={index}
            transition={{
              type: 'timing',
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              loop: true,
              repeatReverse: false,
            }}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        ))}
        <PhoneCall stroke="#fff" fill="#6E01EF" width={32} height={32} />
      </View>
    </View>
  );
};

export default AnimationThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  dot: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#6E01EF',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
