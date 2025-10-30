// app/(auth)/_layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: false, // evita gesto de voltar no auth
      }}
    />
  );
}
