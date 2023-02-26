import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          paddingVertical: 5,
          // paddingBottom: 10,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Stack.Screen name="(home)" options={{}} />
      <Stack.Screen name="chats/[chatsRoom]" options={{ }} />
      <Stack.Screen
        name="users/[name]"
        options={{
           // Set the presentation mode to modal for our modal route.
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
