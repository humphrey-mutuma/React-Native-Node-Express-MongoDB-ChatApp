import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function AppLayout() {
  return (
    <Tabs
      // initialRouteName="index"
      sceneContainerStyle={{}}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        // tabBarActiveTintColor: "darkgreen",
        // tabBarStyle: { backgroundColor: " #5A5A5c" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
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
        }}
      />
      <Tabs.Screen
        name="calls"
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
      <Tabs.Screen
        name="video"
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
      <Tabs.Screen
        name="settings"
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
    </Tabs>
  );
}
