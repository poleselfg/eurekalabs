import React from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';

const ImageList = ({item, navigation}) => {
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate('ImageComponent', {item})}
      style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: item.node.image.uri}} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '33.333%',
    height: 150,
  },
  image: {
    flex: 1,
  },
});

export default React.memo(ImageList);
