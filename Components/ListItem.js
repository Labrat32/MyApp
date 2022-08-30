import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropsTypes from 'prop-types';

const ListItem = ({singleMedia, navigation}) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';
  console.log('listItem: ', singleMedia)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={()=>{
          navigation.navigate('Single', singleMedia);
        }
      }
    >
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropsTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  row: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
});

export default ListItem;
