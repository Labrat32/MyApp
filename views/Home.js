import {Platform, SafeAreaView, StyleSheet,} from 'react-native';
import PropsTypes from 'prop-types';
import List from '../Components/List';

const Home = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <List navigation={navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  }
});

Home.propTypes = {
  navigation: PropsTypes.object,
}

export default Home;

