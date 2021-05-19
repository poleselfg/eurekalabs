import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {CameraButton} from '../../components';
import ImageList from '../ImageList/imagelist';
import {askPermission} from '../../Utils/useGetPhotos';

const HomeScreen = ({route, navigation}) => {
  const [data, setData] = useState('');

  useEffect(() => {
    askPermission(setData);
  }, [route.params?.photo]);

  return (
    <>
      <View style={styles.containerPhotos}>
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={item => item.node.timestamp}
          renderItem={({item}) => (
            <ImageList item={item} navigation={navigation} />
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

export default React.memo(HomeScreen);
