import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {CameraButton} from '../../components';
import CameraRoll from '@react-native-community/cameraroll';

const HomeScreen = ({route, navigation}) => {
  const [data, setData] = useState('');

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
      include: ['location'],
    })
      .then(res => {
        setData(res.edges);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!',
        },
      );
      if (result === 'granted') {
        getPhotos();
      } else {
        console.log('Access to pictures was denied');
        return;
      }
    }
  };

  useEffect(() => {
    askPermission();
  }, [route.params?.photo]);

  return (
    <>
      <View style={styles.containerPhotos}>
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={item => item.node.timestamp}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={() => navigation.navigate('ImageComponent', {item})}
              style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.node.image.uri}} />
            </TouchableHighlight>
          )}
        />
      </View>
      <View style={styles.containerButton}>
        <CameraButton />
      </View>
    </>
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
  containerPhotos: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {HomeScreen};
