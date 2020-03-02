import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#ed7800" />
    </View>
  );
}
