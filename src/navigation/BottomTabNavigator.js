import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";

import TabBarIcon from "../components/TabBarIcon";
import TabBarLabel from "../components/TabBarLabel";

import Colors from "../constants/Colors";
import Menu from "../pages/Menu";
import Coupon from "../pages/Coupon";
import Restaurant from "../pages/Restaurant";
import Help from "../pages/Help";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerStyle: {
      backgroundColor: Colors.tintColor
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 30,
      fontFamily: "space-mono"
    }
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name="Início" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name="Cardáprio" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="layers" />
          )
        }}
      />
      <BottomTab.Screen
        name="Offer"
        component={Coupon}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name="Ofertas" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="tag" />
          )
        }}
      />
      <BottomTab.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name="Restaurantes" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="location-pin" />
          )
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} name="Ajuda" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="question" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "BURGER KING";
    case "Menu":
      return "CARDÁPIO";
    case "Offer":
      return "OFERTAS";
    case "Restaurant":
      return "RESTAURANTES";
    case "Help":
      return "AJUDA";
  }
}
