import {PermissionsAndroid, Platform} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const getPhotos = setData => {
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

const askPermission = async setData => {
  if (Platform.OS === 'android') {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Permission Explanation',
        message: 'ReactNativeForYou would like to access your photos!',
      },
    );
    if (result === 'granted') {
      getPhotos(setData);
    } else {
      console.log('Access to pictures was denied');
      return;
    }
  }
};

export {askPermission};
