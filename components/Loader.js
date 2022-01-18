import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useColors } from '../hooks';

const Loader = ({ color }) => {
  const colors = useColors();

  return <ActivityIndicator color={color || colors.primary} />;
};

export default Loader;
