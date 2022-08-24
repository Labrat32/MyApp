import {StatusBar} from 'expo-status-bar';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from './ListItem';
import {useEffect, useState} from 'react';

const List = () => {

  const url = 'https://media.mw.metropolia.fi/wbma/';
  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setMediaArray(json);
    } catch (error) {
      console.log('media fetch failed', error);
      //TODO: notify user?
    }
  };
  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item}/>}
    />
  );
};

export default List;
