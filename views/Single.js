import React from 'react';
import PropsTypes from 'prop-types';
import {mediaUrl} from '../util/variables';
import {Card} from '@rneui/themed';
import FullSizeImage from '../Components/FullSizeImage';

const Single = ({route}) => {
  console.log('Single route: ', route)
  const {filename, title} = route.params
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <FullSizeImage source={{uri: mediaUrl + filename}} />
    </Card>
  );
};


Single.propTypes = {
  route: PropsTypes.object,
}

export default Single;
