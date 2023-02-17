import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import TopTabsNavigator from "./TopTabsNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
import MessagesScreen from "../screens/MessagesScreen";

export default function Navigation({}) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          paddingVertical: 5,
          // paddingBottom: 10,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Stack.Screen name="Root" component={TopTabsNavigator} options={{}} />
      <Stack.Screen name="Messages" component={MessagesScreen} />

      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}
