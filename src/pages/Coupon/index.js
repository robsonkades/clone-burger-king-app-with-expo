import React, { useEffect, useState, useCallback } from "react";
import { View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import api from "../../services/api";
import Categories from "../../constants/Category";
import Loading from "../../components/Loading";

import { TagContainer, Tag } from "./styles";

export default function Coupon() {
  const [coupons, setCoupons] = useState([]);
  const [selected, setSelected] = useState(1);
  const [isLoading, setLoading] = useState(false);

  const loadCoupons = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/coupons/${selected}`);
      setCoupons(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCoupons();
  }, [selected]);

  const onSelect = useCallback(
    id => {
      setSelected(id);
    },
    [selected]
  );

  return (
    <>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Categories}
          keyExtractor={item => String(item.id)}
          extraData={selected}
          renderItem={({ item }) => (
            <TagContainer
              color={item.color}
              selected={selected === item.id}
              onPress={() => onSelect(item.id)}
            >
              <Tag selected={selected === item.id} color={item.color}>
                {item.title}
              </Tag>
            </TagContainer>
          )}
        />
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          style={{ margin: 2 }}
          showsVerticalScrollIndicator={false}
          data={coupons}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 195, height: 195, margin: 5 }}
              />
            </View>
          )}
        />
      )}
    </>
  );
}
