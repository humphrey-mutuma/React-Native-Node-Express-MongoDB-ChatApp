import {
  ImageBackground,
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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const image = {
  uri: "https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889__340.jpg",
};

export default function Video() {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      className="h-screen flex-1 items-center justify-end "
    >
      <View className="flex-row w-full   items-center justify-evenly mb-20">
        <TouchableOpacity className=" p-2 rounded-full bg-gray-500">
          <Ionicons color="white" name="volume-mute" size={40} />
        </TouchableOpacity>
        <TouchableOpacity className=" p-2 rounded-full bg-green-500">
          <Ionicons color="white" name="call" size={40} />
        </TouchableOpacity>
        <TouchableOpacity className=" p-2 rounded-full bg-red-500">
          <MaterialIcons color="white" name="call-end" size={40} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
