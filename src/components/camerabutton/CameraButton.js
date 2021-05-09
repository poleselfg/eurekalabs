import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CameraButton = () => {
  function GoToButton({screenName}) {
    const navigation = useNavigation();
    return (
      <Button
        title={'Take Photo'}
        onPress={() => navigation.navigate(screenName)}
      />
    );
  }
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#333',
      padding: 10,
    },
  });

  return (
    <View>
      <GoToButton style={styles.button} screenName="CameraView" />
    </View>
  );
};

export {CameraButton};
