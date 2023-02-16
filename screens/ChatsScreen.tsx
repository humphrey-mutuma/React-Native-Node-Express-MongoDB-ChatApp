import { ScrollView, Text, View } from "react-native";
import ChatsCard from "../components/ChatsCard";

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

export default function ChatsScreen() {
  return (
    <View className="bg-black">
      <ScrollView className="">
        {chats.map((chat) => (
          <ChatsCard
            key={chat.recipientName}
            message={chat.message}
            recipientName={chat.recipientName}
            recipientImage={chat.recipientImage}
          />
        ))}
      </ScrollView>
    </View>
  );
}
