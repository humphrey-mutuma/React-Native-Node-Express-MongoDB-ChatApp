import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { UserProps } from "../types";

const UsersAvatar = ({ image, name }: UserProps) => {
  return (
    <TouchableOpacity className="h-20 w-30 m-4 items-center relative">
      <Image className="w-12 h-12 rounded-full" source={{ uri: `${image}` }} />
      <View className="w-2 h-2 bg-green-600 rounded-full absolute right-1"></View>
      <Text className="text-slate-300 text-sm text-center mt-1">{name.slice(0, 6)}</Text>
    </TouchableOpacity>
  );
};

export default UsersAvatar;
