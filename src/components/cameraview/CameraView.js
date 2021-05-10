import React, {PureComponent} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import Geolocation from '@react-native-community/geolocation';

class CameraView extends PureComponent {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  state = {
    initialPosition: 'unknown',
  };

  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {
        quality: 0.5,
        base64: true,
        exif: true,
        location: this.state.initialPosition,
      };
      const data = await this.camera.takePictureAsync(options);
      CameraRoll.save(data.uri);
      this.props.navigation.navigate('Home', {photo: data.exif.DateTime});
    }
  };

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
          <TouchableOpacity style={styles.button} onPress={this.takePicture}>
            <Text>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    );
  }
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
