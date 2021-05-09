import React, {PureComponent} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';

class CameraView extends PureComponent {
  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.camera}
        captureAudio={false}
        exif={true}
        saveToCameraRoll={true}>
        <View style={styles.view}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.takePicture.bind(this)}>
            <Text>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        exif: true,
      };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.save(data.uri, {type: 'photo', data});
    }
  };
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    borderColor: '#4f83cc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120%',
    height: '240%',
    backgroundColor: '#fff',
    borderRadius: 100,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: '#414685',
    shadowOffset: {
      width: 1,
      height: 5.5,
    },
    elevation: 6,
  },
  view: {
    position: 'absolute',
    bottom: '15%',
    right: '43%',
  },
});

export {CameraView};
