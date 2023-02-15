import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View>
      <Text>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
