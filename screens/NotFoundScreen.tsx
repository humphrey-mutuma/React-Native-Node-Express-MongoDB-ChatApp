import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

const NotFoundScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Root");
  };
  
  return (
    <View>
      <Text>Oops! This page does not seem to exist!</Text>
      <TouchableOpacity onPress={handleNavigation}>Go Home</TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
// React.FormEvent<HTMLInputElement>;
