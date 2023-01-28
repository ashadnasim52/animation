import React, {useRef, useEffect} from 'react';
import {Animated, TouchableOpacity, View, Text} from 'react-native';
import {Crosshair} from 'react-native-feather';

import styles from './styles';

const Modal = ({isVisible, title, children, onClose}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleClose = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isVisible ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const containerAnimation = {
    opacity: animatedValue,
  };

  return isVisible ? (
    <Animated.View style={[styles.container, containerAnimation]}>
      <View style={[styles.modal]}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={handleClose} style={styles.closeBtn}>
            <Crosshair stroke="#fff" fill="#6E01EF" width={32} height={32} />
          </TouchableOpacity>
        </View>
      </View>
      {children}
    </Animated.View>
  ) : null;
};

export default Modal;
