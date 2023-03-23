import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated } from 'react-native';

import { Surface } from '@react-native-community/art';

import AnimatedCircle from './AnimatedCircle';

interface CirclesLoaderProps {
  color?: string;
  dotRadius?: number;
  size?: number;
}

const CirclesLoader: React.FC<CirclesLoaderProps> = ({
  color = '#1e90ff',
  dotRadius = 8,
  size = 40,
}) => {
  const opacitiesRef = useRef<Animated.Value[]>([]);
  const timersRef = useRef<number[]>([]);

  const initOpacities = useMemo(() => {
    return Array.from({ length: 12 }, () => new Animated.Value(1));
  }, []);

  const [opacities] = useState<Animated.Value[]>(initOpacities);

  useEffect(() => {
    opacitiesRef.current = opacities;
  }, [opacities]);

  const _animation = useCallback((i: number) => {
    Animated.sequence([
      Animated.timing(opacitiesRef.current[i], {
        toValue: 0.1,
        duration: 600,
        useNativeDriver: false,
      }),
      Animated.timing(opacitiesRef.current[i], {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }),
    ]).start(() => {
      _animation(i);
    });
  }, []);

  const startAnimation = useCallback(() => {
    opacitiesRef.current.forEach((item, i) => {
      const id = setTimeout(() => {
        _animation(i);
      }, i * 150);
      timersRef.current.push(id);
    });
  }, [_animation]);

  useEffect(() => {
    startAnimation();
    return () => {
      timersRef.current.forEach((id) => {
        clearTimeout(id);
      });
    };
  }, [startAnimation]);

  const eachDegree = 360 / opacities.length;

  return (
    <Surface width={size + dotRadius} height={size + dotRadius}>
      {opacities.map((item, i) => {
        const radian = (i * eachDegree * Math.PI) / 180;
        const x = Math.round((size / 2) * Math.cos(radian)) + size / 2 + dotRadius / 2;
        const y = Math.round((size / 2) * Math.sin(radian)) + size / 2 + dotRadius / 2;
        return (
          <AnimatedCircle
            key={i}
            radius={dotRadius}
            fill={color}
            x={x}
            y={y}
            opacity={opacities[i]}
          />
        );
      })}
    </Surface>
  );
};

export default CirclesLoader;
