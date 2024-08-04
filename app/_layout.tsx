import { store } from "@/store";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux'
export default function RootLayout() {
  return (
    <Provider
      store={store}
    >
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="(screen)"
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </SafeAreaProvider>
    </Provider>
  );
}
