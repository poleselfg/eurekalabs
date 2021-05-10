import React from 'react';
import {StyleSheet, Text, Image, View, Button, Share} from 'react-native';

const ImageComponent = ({route}) => {
  const {item} = route.params;
  const shareOptions = {
    message: 'See my new photo, taken with EurekaLabs!!',
    url: 'data:image/jpeg;base64,<item.node.image.uri>',
  };

  return (
    <>
      <View style={styles.view}>
        <Image style={styles.image} source={{uri: item.node.image.uri}} />
      </View>
      <View style={styles.viewText}>
        <Text>Position: {item.node.location || 'UNKNOWN'}</Text>
      </View>
      <Button title="Share" onPress={() => Share.share(shareOptions)} />
    </>
  );
};

const styles = StyleSheet.create({
  view: {width: '100%', height: '85%'},
  viewText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {flex: 1},
});

export {ImageComponent};
