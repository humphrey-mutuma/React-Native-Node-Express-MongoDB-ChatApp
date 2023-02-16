/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import GroupsScreen from "../screens/GroupsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarActiveTintColor: "green",
        // swipeEnabled: { true}
      }}
    >
      <TopTab.Screen
        name="TabOne"
        component={ChatsScreen}
        options={({ navigation }) => ({
          title: "Chats",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music-note" color="white" size={26} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <TopTab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          title: "Groups",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music-note" color="white" size={26} />
          ),
        }}
      />
      <TopTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: "Status",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music-note" color="white" size={26} />
          ),
        }}
      />
      <TopTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          title: "Calls",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="music-note" color="white" size={26} />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}
