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
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Settings() {
  return (
    <View className="w-full h-screen">
      <StatusBar style="light" />
      <LinearGradient colors={["black", "#301934"]} className="flex-1 p-2 ">
        <SafeAreaView>
          <View className="w-full items-center justify-between flex-row ">
            <Text className="text-slate-100 text-2xl">Setting</Text>
            <TouchableOpacity>
              <AntDesign
                style={{ marginHorizontal: 5 }}
                color="white"
                name="questioncircleo"
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
