import * as React from 'react';
import { Text } from 'react-native';

import Colors from "../../constants/Colors";

export default function TabBarLabel(props) {
  return <Text style={{ color: props.focused ? Colors.tintColor: Colors.tabIconDefault }}>{props.name}</Text>;
}