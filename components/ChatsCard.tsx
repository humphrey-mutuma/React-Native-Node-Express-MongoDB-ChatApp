import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ChatProps } from "../types";
import { useNavigation } from "@react-navigation/native";

const ChatsCard = ({ recipientImage, message, recipientName }: ChatProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Messages")}
      className="w-full  p-2 flex-1 flex-row items-center justify-between"
    >
      <View className="w-full flex-1 flex-row">
        <Image
          className="w-12 h-12 rounded-full"
          source={{ uri: `${recipientImage}` }}
        />
        <View className="pl-4 ">
          <Text className="text-white font-semibold">{recipientName}</Text>
          <Text className="text-gray-400">{message}</Text>
        </View>
      </View>
      <View className="items-center justify-between h-full">
        <Text className="text-xs text-slate-600">
          {Math.floor(Math.random() * 12)}:{Math.floor(Math.random() * 60)}
        </Text>
        <View className="bg-green-600  rounded-full w-4 h-4 flex items-center justify-center">
          <Text className="text-black text-xs ">
            {Math.floor(Math.random() * 10)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatsCard;
