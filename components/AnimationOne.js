import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimationOne = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(3);
  const handleRotation = progress => {
    'worklet';
    return `${progress.value * 2 * Math.PI}rad`;
  };
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [
        {scale: scale.value},
        {
          rotate: handleRotation(progress),
        },
      ],
    };
  }, []);
  useEffect(() => {
    // progress.value = withTiming(0.5, {
    //   duration: 6000,
    // });
    // scale.value = withTiming(2, {
    //   duration: 6000,
    // });
    progress.value = withRepeat(withSpring(0.6), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: 'red',
          },
          reanimatedStyle,
        ]}></Animated.View>
      {/* <Text style={{color: 'black', fontSize: 15}}>AnimationOne</Text> */}
    </View>
  );
};

export default AnimationOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

// import {
//   Animated,
//   PanResponder,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React, {useState} from 'react';

// const AnimationOne = () => {
//   const panResponder = React.useRef(
//     PanResponder.create({
//       // Ask to be the responder:
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

//       onPanResponderGrant: (evt, gestureState) => {
//         // The gesture has started. Show visual feedback so the user knows
//         // what is hAnimationOneening!
//         // gestureState.d{x,y} will be set to zero now
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         // The most recent move distance is gestureState.move{X,Y}
//         // The accumulated gesture distance since becoming responder is
//         // gestureState.d{x,y}
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) => true,
//       onPanResponderRelease: (evt, gestureState) => {
//         // The user has released all touches while this view is the
//         // responder. This typically means a gesture has succeeded
//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         // Another component has become the responder, so this gesture
//         // should be cancelled
//       },
//       onShouldBlockNativeResponder: (evt, gestureState) => {
//         // Returns whether this component should block native components from becoming the JS
//         // responder. Returns true by default. Is currently only supported on android.
//         return true;
//       },
//     }),
//   ).current;

//   const [opacity, setOpacity] = useState(new Animated.Value(1));
//   const [leftValue, setLeftValue] = useState(new Animated.Value(0));
//   const [value, setValue] = useState(
//     new Animated.ValueXY({
//       x: 0,
//       y: 0,
//     }),
//   );
//   const moveBall = () => {
//     Animated.timing(value, {
//       toValue: {
//         x: 100,
//         y: 100,
//       },
//       duration: 10000,
//       useNativeDriver: false,
//     }).start();
//   };
//   const center = () => {
//     Animated.timing(value, {
//       toValue: {
//         x: 500,
//         y: 500,
//       },
//       duration: 2000,
//       useNativeDriver: false,
//     }).start();
//   };
//   const moveLeft = () => {
//     Animated.spring(leftValue, {
//       toValue: 500,
//       duration: 2000,
//       useNativeDriver: false,
//     }).start();
//   };
//   const fadeIn = () => {
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };
//   const fadeOut = () => {
//     Animated.timing(opacity, {
//       toValue: 0,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   };
//   return (
//     <View style={styles.bgc} {...panResponder.panHandlers}>
//       <Animated.View
//         style={{
//           // marginLeft: leftValue,
//           width: 100,
//           height: 100,
//           borderRadius: 100 / 2,
//           backgroundColor: 'red',
//           opacity: opacity,
//         }}></Animated.View>

//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={moveBall}>
//         <Text style={{color: 'black'}}>Move Ball</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={center}>
//         <Text style={{color: 'black'}}>Center Move Ball</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={moveLeft}>
//         <Text style={{color: 'black'}}>Move Left Ball</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={moveLeft}>
//         <Text style={{color: 'black'}}>Move Left Ball</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={fadeOut}>
//         <Text style={{color: 'black'}}>Fade out</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={{
//           marginTop: 30,
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           backgroundColor: 'grey',
//         }}
//         onPress={fadeIn}>
//         <Text style={{color: 'black'}}>Fade In</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default AnimationOne;

// const styles = StyleSheet.create({
//   bgc: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
