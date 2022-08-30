import {
  FlatList,
} from 'react-native';
import PropsTypes from 'prop-types';
import ListItem from './ListItem';
import {useMedia} from '../hooks/ApiHooks';


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
