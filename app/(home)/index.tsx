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
import { useState } from "react";
import { chats, users } from "../../data";
import UsersAvatar from "../../components/UsersAvatar";
import ChatsCard from "../../components/ChatsCard";

export default function ChatsScreen() {
  const [number, onChangeNumber] = useState("");

  return (
    <View className="w-full min-h-screen">
      <StatusBar style="light" />
      <LinearGradient colors={["black", "#301934"]} className="flex-1 p-2 ">
        <SafeAreaView>
          <View className="w-full items-center justify-between flex-row ">
            <Text className="text-slate-100 text-2xl">Buddies</Text>
            <TouchableOpacity>
              <Ionicons
                style={{ marginHorizontal: 5 }}
                color="white"
                name="ios-filter-outline"
                size={25}
              />
            </TouchableOpacity>
          </View>
          {/* search input section */}
          <View className="relative m-3">
            <TextInput
              className="block w-full p-2 rounded-full pl-5 placeholder:text-slate-100   bg-slate-800 text-white"
              placeholder="Search"
              onChangeText={onChangeNumber}
              value={number}
            />
            <TouchableOpacity className="absolute inset-y-0 right-3 top-2 flex items-center pl-3 pointer-events-none">
              <Ionicons color="gray" name="ios-search-outline" size={25} />
            </TouchableOpacity>
          </View>
          {/* online members section */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {users.map((user) => (
              <UsersAvatar
                key={user.name}
                name={user.name}
                image={user.userAvatar}
              />
            ))}
          </ScrollView>
          {/* chats */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="text-white font-bold text-lg m-3 rounded-full bg-purple-900 text-center w-20">
              Recent
            </Text>

            {chats.map((chat) => (
              <ChatsCard
                key={chat.senderName}
                message={chat.message}
                senderName={chat.senderName}
                senderImage={chat.senderImage}
                senderId={chat.senderName}
                chatId={chat.senderName}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
