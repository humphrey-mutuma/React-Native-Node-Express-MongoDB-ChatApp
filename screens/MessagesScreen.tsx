import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const MessagesScreen = () => {
  return (
    <LinearGradient
      colors={["black", "#301934"]}
      className="flex-1 w-full h-screen p-2"
    >
      <SafeAreaView>
        <Text className="text-white ">MessagesScreen</Text>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
};

export default MessagesScreen;
