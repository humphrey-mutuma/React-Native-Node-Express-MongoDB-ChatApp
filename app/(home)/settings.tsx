import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Settings() {
  return (
    <View className="w-full h-screen">
      <StatusBar style="light" />
      <LinearGradient colors={["black", "#301934"]} className="flex-1 p-2 ">
        <SafeAreaView>
          <View className="w-full items-center justify-between flex-row ">
            <Text className="text-slate-100 text-2xl">Setting</Text>
            <TouchableOpacity>
              <Ionicons
                style={{ marginHorizontal: 5 }}
                color="white"
                name="ios-filter-outline"
                size={25}
              />
            </TouchableOpacity>
          </View>

          {/* chats */}
          <ScrollView showsVerticalScrollIndicator={false}>
           {/* content */}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
