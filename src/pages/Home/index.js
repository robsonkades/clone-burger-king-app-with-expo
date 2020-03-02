import React, { useEffect, useState } from "react";
import { Text, Image, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import api, { HOST } from "../../services/api";

import Card from "../../components/Card";
import Loading from "../../components/Loading";

export default function Home() {
  const [banners, setBanners] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function handlerError(error) {
    const message = error.message || error;
    Alert.alert("Error fetch data", message, [
      { text: "OK", onPress: () => {} }
    ]);
  }

  const loadBanners = async () => {
    try {
      setLoading(true);
      const response = await api.get("/banners");
      const data = response.data.map(banner => {
        banner.url = `${HOST}/${banner.imageUrl}`;
        return banner;
      });
      console.log(data);
      setBanners(data);
      setLoading(false);
    } catch (error) {
      handlerError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBanners();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={banners}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card>
              <Image
                resizeMode="stretch"
                source={{
                  height: 200,
                  uri: item.url
                }}
              />
            </Card>
          )}
        />
      )}
    </>
  );
}
