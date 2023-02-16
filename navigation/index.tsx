import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import MessagesScreen from "../screens/MessagesScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import TopTabsNavigator from "./TopTabsNavigator";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";

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
      <Stack.Screen
        name="Root"
        component={TopTabsNavigator}
        options={{
          title: "HMWhatsApp",

          headerShown: true,
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ marginRight: 5 }}
                  name="airplane"
                  color="gray"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ marginHorizontal: 5 }}
                  color="gray"
                  name="white-balance-sunny"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  style={{ marginHorizontal: 5 }}
                  color="gray"
                  name="search-outline"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
                <MaterialCommunityIcons
                  style={{ marginHorizontal: 5 }}
                  color="gray"
                  name="camera"
                  size={25}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ marginLeft: 5 }}
                  color="gray"
                  name="dots-vertical"
                  size={25}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
