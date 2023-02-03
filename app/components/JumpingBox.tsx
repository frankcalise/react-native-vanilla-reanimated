import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {Button, View, ViewStyle} from 'react-native';

function JumpingBox() {
  const offset = useSharedValue(0);

  const $animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255),
        },
      ],
    };
  });

  return (
    <View style={$container}>
      <Animated.View style={[$box, $animatedStyles]} />
      <Button
        onPress={() =>
          (offset.value = withSpring(Math.random(), {}, finished => {
            if (finished) {
              console.log('ANIMATION ENDED');
            } else {
              console.log('ANIMATION GOT CANCELLED');
            }
          }))
        }
        title="Move"
      />
    </View>
  );
}

export {JumpingBox};

const $container: ViewStyle = {
  gap: 10,
  padding: 10,
};

const $box: ViewStyle = {
  height: 50,
  width: 50,
  borderRadius: 5,
  backgroundColor: 'navy',
};
