import { store } from "@/store";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { KeyboardAvoidingView, Platform } from "react-native";
export default function RootLayout() {
  return (
    <Provider
      store={store}
    >
      <SafeAreaProvider>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
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
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}
