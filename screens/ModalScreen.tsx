import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModalScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-black w-full h-screen">
      <SafeAreaView className=" text-center flex-row items-center justify-center">
        <View>
          <Text className="text-white text-2xl">Modal</Text>
          <Pressable onPress={() => navigation.goBack()}>
            <Text className="mt-5 text-blue-500 border px-6 py-3 rounded-full bg-slate-800">
              Go Back
            </Text>
          </Pressable>
        </View>

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "light"} />
      </SafeAreaView>
    </View>
  );
}
