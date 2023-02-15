import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

// import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";

export default function App() {
  // const isLoadingComplete = useCachedResources();

  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}
