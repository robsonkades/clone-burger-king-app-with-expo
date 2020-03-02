import * as React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";

export default function TabBarIcon(props) {
  return (
    <SimpleLineIcons
      name={props.name}
      size={24}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
