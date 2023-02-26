import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ChatProps } from "../types";
import { Link } from "expo-router";

const ChatsCard = ({
  senderImage,
  message,
  senderName,
  senderId,
  chatId,
}: ChatProps) => {
  return (
    <View className="w-[96vw] flex-row items-center justify-between  bg-black my-1 rounded-2xl p-2 ">
      <Link href={`/users/${senderId}`} className="mr-2">
        <View>
          <Image
            className="w-12 h-12 rounded-full shrink-0"
            source={{ uri: `${senderImage}` }}
          />
        </View>
      </Link>
      <Link href={`/chats/${chatId}`} className="flex-1 ml-2 h-full  w-full">
        <View className="w-[75vw]  flex-1 flex-row items-center justify-between ">
          <View>
            <Text className="text-white font-semibold">{senderName}</Text>
            <Text className="text-gray-400">{message}</Text>
          </View>

          <View className="items-center justify-center gap-2">
            <Text className="text-xs text-slate-600">
              {Math.floor(Math.random() * 12)}:{Math.floor(Math.random() * 60)}
            </Text>
            <View className="bg-green-600  rounded-full w-4 h-4 flex items-center justify-center">
              <Text className="text-black text-xs ">
                {Math.floor(Math.random() * 10)}
              </Text>
            </View>
          </View>
        </View>
      </Link>
    </View>
  );
};

export default ChatsCard;
