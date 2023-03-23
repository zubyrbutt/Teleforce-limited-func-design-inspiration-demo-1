import { AvatarIcon } from 'assets/icons/svg'
import { MotiView } from 'moti'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Easing } from 'react-native-reanimated'
import { SvgXml } from 'react-native-svg'
import { colors } from 'theme'

interface MotiViewWrapperProps {
  index: number;
}

const Avatar = () => {
  return (
    <View style={{}}>
      <View style={[styles.circle, styles.center]}>
        {[...Array(3).keys()].map((_, index) => {
          return <MotiViewWrapper key={index} index={index} />;
        })}
        <SvgXml width={80} height={80} xml={AvatarIcon} />
      </View>
    </View>
  );
};

const MotiViewWrapper = ({index}: MotiViewWrapperProps) => {
  return (
    <MotiView
      from={{
        opacity: 0.2,
        scale: 0.8,
      }}
      animate={{
        opacity: 0,
        scale: 1.6,
      }}
      transition={{
        // wave effect
        type: 'timing',
        duration: 3000,
        delay: index * 400,
        easing: Easing.out(Easing.ease),
        repeatReverse: false,
        repeat: 2,
      }}
      style={[StyleSheet.absoluteFillObject, styles.circle]}
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  circle: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: colors.info,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
