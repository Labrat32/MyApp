import {useContext, useEffect, useState} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTag} from '../hooks/ApiHooks';
import {mediaUrl} from '../util/variables';
import {Avatar, Button, Card, ListItem} from '@rneui/themed';
import FullSizeImage from '../Components/FullSizeImage';
import {ScrollView} from 'react-native';

const Profile = () => {
  const {isLoggedIn, setIsLoggedIn, user} = useContext(MainContext);
  const [avatar, setAvatar] = useState('https://placekitten.com/640');
  const {getFilesByTag} = useTag();

  const fetchAvatar = async () => {
    try {
      const avatarArray = await getFilesByTag('avatar_2147');
      const avatarFile = avatarArray.pop()
      setAvatar(mediaUrl + avatarFile.filename);
    }catch (error) {
      console.log('fetchAvatar', error.message);
    }
  };

  useEffect(() => {
    fetchAvatar();
  }, []);

  console.log('Profile', isLoggedIn);

  const logOut = async () => {
    try {
      setIsLoggedIn(false);
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Profile - logOut', error);
    }
  };

  return (
    <ScrollView>
      <Card>
        <Card.Title>{user.full_name}</Card.Title>
        <FullSizeImage source={{uri: avatar}} />
        <ListItem>
          <Avatar
            icon={{name: 'contact-mail', type: 'material'}}
            containerStyle={{backgroundColor: '#aaa'}}
          />
          <ListItem.Title>{user.email}</ListItem.Title>
        </ListItem>
        <ListItem>
          <Avatar
            icon={{name: 'person', type: 'material'}}
            containerStyle={{backgroundColor: '#aaa'}}
          />
          <ListItem.Title>
            {user.username} (id: {user.user_id})
          </ListItem.Title>
        </ListItem>
        <Button title="Logout" onPress={logOut} />
      </Card>
    </ScrollView>
  );
};


export default Profile;
