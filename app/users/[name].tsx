import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useEffect } from "react";
import axios from "axios";

export default function User() {
  const { name, image } = useSearchParams();

  // fetch chatRooms
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/user`)
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <SafeAreaView className="w-full h-screen  rounded-t-lg overflow-hidden">
      <StatusBar style="light" />
      <LinearGradient colors={["black", "#301934"]} className="flex-1 p-2 ">
        <SafeAreaView>
          <View className="w-full items-center justify-between flex-row ">
            <Link href="../" className="text-lg text-center text-white">
              <Ionicons
                style={{ marginHorizontal: 5 }}
                color="white"
                name="arrow-back-circle-outline"
                size={30}
              />
            </Link>
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
            {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
            <StatusBar style="dark" />
            {/* content */}
            <Text className="text-lg text-center ">
              Yolooo {name} {image}
            </Text>
            {/* <Image className="w-12 h-12 rounded-full" source={{ uri: `${image}` }} /> */}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaView>
  );
}
