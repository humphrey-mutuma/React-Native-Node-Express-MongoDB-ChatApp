import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const NotFoundScreen = () => {
  const navigation = useNavigation();

  return (
    <View className=" w-full h-screen flex-1 items-center justify-center bg-black">
      <Text className="text-xl text-slate-600">
        Oops! This page does not seem to exist!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Root")}>
        <Text className="mt-5 text-blue-500 border px-6 py-3 rounded-full bg-slate-800">
          Go Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
