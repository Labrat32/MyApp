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
import PropsTypes from 'prop-types';
import ListItem from './ListItem';
import {useMedia} from '../hooks/ApiHooks';
import {
  PropsType
} from 'react-native/ReactCommon/hermes/inspector/tools/msggen/src/Type';
import Home from '../views/Home';

const List = ({navigation}) => {
  const {mediaArray} = useMedia();
  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem
        navigation={navigation}
        singleMedia={item}/>}
    />
  );
};

List.propTypes = {
  navigation: PropsTypes.object,
}

export default List;
