/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import * as React from "react";
import ChatsScreen from "../screens/ChatsScreen";
import { TouchableOpacity } from "react-native";
import CallsScreen from "../screens/CallsScreen";
import VideoCallScreen from "../screens/VideoCallScreen";
import SettingsScreen from "../screens/SettingsScreen";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

export default function TopTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Chats"
      sceneContainerStyle={{}}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        // tabBarActiveTintColor: "darkgreen",
        // tabBarStyle: { backgroundColor: " #5A5A5c" },
      }}
    >
      <BottomTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          tabBarIcon: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={{ marginHorizontal: 5 }}
                color="black"
                name="chat-processing-outline"
                size={25}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Ionicons
                style={{ marginHorizontal: 5 }}
                color="black"
                name="ios-call-outline"
                size={25}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="video call"
        component={VideoCallScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={{ marginHorizontal: 5 }}
                color="black"
                name="camera-plus-outline"
                size={25}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity>
              <Ionicons
                style={{ marginHorizontal: 5 }}
                color="black"
                name="settings-outline"
                size={25}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
