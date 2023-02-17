import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ChatsCard from "../components/ChatsCard";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import UsersAvatar from "../components/UsersAvatar";

const chats = [
  {
    recipientName: "Alex Mutuma",
    message: "Yolooo there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Janiie Mellissa",
    message: "hello there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    recipientName: "Dr Tatus",
    message: "Wharuuup chief",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Joe the trader",
    message: "This is craiizy",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    recipientName: "Alexii Mutuma",
    message: "Yolooo there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Janet Mellissa",
    message: "hello there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    recipientName: "Mrs Tirus",
    message: "Wharuuup chief",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Josee Dev",
    message: "This is craiizy",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    recipientName: "Ken Mutuma",
    message: "Yolooo there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Jane Mellissaa",
    message: "hello there",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    recipientName: "Mr Tiruss",
    message: "Wharuuup chief",
    recipientImage:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    recipientName: "Joe  Dev",
    message: "This is craiizy",
    recipientImage:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
];

const users = [
  {
    name: "Alex Mutuma",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Janiie Mellissa",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    name: "Dr Tatus",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Joe the trader",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    name: "Alexii Mutuma",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Janet Mellissa",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    name: "Mrs Tirus",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Josee Dev",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    name: "Ken Mutuma",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Jane Mellissaa",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
  {
    name: "Mr Tiruss",
    userAvatar:
      "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg",
  },
  {
    name: "Joe  Dev",
    userAvatar:
      "https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255__340.jpg",
  },
];
export default function ChatsScreen() {
  const [number, onChangeNumber] = useState("");

  return (
    <View className="w-full h-screen">
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
                key={chat.recipientName}
                message={chat.message}
                recipientName={chat.recipientName}
                recipientImage={chat.recipientImage}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
