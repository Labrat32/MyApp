import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropsTypes from 'prop-types';

const ListItem = (props) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';

  const thumbnailUrl =
    mediaUrl + props.singleMedia.filename.split('.')[0] + '-tn160.png';
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{uri: thumbnailUrl}}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
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
