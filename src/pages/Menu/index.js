import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

import api from "../../services/api";
import Categories from "../../constants/Category";

import { Container, Title, ImageItem, Item } from "./styles";

export default function Menu() {
  function handleBackgroundColor({ id }) {
    const value = parseInt(id);
    return value % 2 == 0 ? "transparent" : "#fff";
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Categories}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <Container backgroundColor={handleBackgroundColor(item)}>
          <Item>
            <ImageItem source={{ uri: item.imageUrl }} />
            <Title color={item.color}>{item.title}</Title>
          </Item>
          <SimpleLineIcons name="arrow-right" size={14} />
        </Container>
      )}
    />
  );
}
