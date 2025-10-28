// app/(public)/reset.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { TextInput, View } from "react-native";

export default function ResetPassword() {
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
        Recuperar senha
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Enviaremos um link para redefinir tua senha (simulação).
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

      <BCButton
        title="Enviar link (mock)"
        onPress={() => router.push("/(public)" as any)}
      />
      <BCButton
        title="Voltar ao login"
        variant="secondary"
        onPress={() => router.push("/(public)/login" as any)}
      />
    </View>
  );
}
