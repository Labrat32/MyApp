import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(MainContext);
  console.log("Profile: ", isLoggedIn);
  const logOut = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
  }
  return (
    <SafeAreaView style={styles.container}>
      <Button title={"Logout"} onPress={logOut}/>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;
