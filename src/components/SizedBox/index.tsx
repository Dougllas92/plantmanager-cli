import React from 'react';
import { View } from 'react-native';

interface SizedProps {
  height: number,
  width: number
}

export function SizedBox({ height, width }: SizedProps) {
  return <View style={{ height, width }} />
}