import { Tabs } from "expo-router";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function AppLayout() {
  return (
    <Tabs
      initialRouteName="index"
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
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              style={{ marginHorizontal: 5 }}
              color={color}
              name="chat-processing-outline"
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calls"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{ marginHorizontal: 5 }}
              color={color}
              name="ios-call-outline"
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              style={{ marginHorizontal: 5 }}
              color={color}
              name="camera-plus-outline"
              size={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={{ marginHorizontal: 5 }}
              color={color}
              name="settings-outline"
              size={25}
            />
          ),
        }}
      />
      {/* <Tabs.Screen
        // Name of the route to hide.
        name="[messages]"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      /> */}
    </Tabs>
  );
}
