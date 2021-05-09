import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>header</Text>
    </View>
  );
};

export {Header};
