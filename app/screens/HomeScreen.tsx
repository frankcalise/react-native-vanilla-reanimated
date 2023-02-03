import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {JumpingBox} from '../components';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <View style={{flex: 1}}>
        <Text style={{alignSelf: 'center'}}>Animated Box</Text>
        <JumpingBox />
      </View>

      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Button
          title="Go to List Screen"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    </View>
  );
}

export {HomeScreen};
