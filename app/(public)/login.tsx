// app/(public)/login.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { TextInput, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BC.black,
        padding: 24,
        gap: 16,
        justifyContent: "center",
      }}
    >
      <Text variant="H1" style={{ color: BC.white }}>
        Entrar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Usa teu e-mail e senha (simulação).
      </Text>

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        E-mail
      </Text>
      <TextInput
        placeholder="teu@email.com"
        placeholderTextColor={BC.gray500}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{
          color: BC.white,
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
        }}
      />

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Senha
      </Text>
      <TextInput
        placeholder="••••••••"
        placeholderTextColor={BC.gray500}
        secureTextEntry
        style={{
          color: BC.white,
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
        }}
      />

      <BCButton
        title="Entrar (mock)"
        onPress={() => router.push("/modal" as any)}
      />
      <BCButton
        title="Esqueci minha senha"
        variant="secondary"
        onPress={() => router.push("/(public)/reset" as any)}
      />
    </View>
  );
}
