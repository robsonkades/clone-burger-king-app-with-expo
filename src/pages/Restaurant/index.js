import React from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";

import { Container } from "./styles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function Restaurant() {
  return (
    <Container>
      <MapView style={{ width, height }} />
    </Container>
  );
}
