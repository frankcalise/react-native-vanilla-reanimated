import {FlashList} from '@shopify/flash-list';
import * as React from 'react';
import {Text} from 'react-native';

const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
];

function ListScreen() {
  return (
    <FlashList
      data={DATA}
      renderItem={({item}) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
}

export {ListScreen};
