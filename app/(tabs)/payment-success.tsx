// app/(tabs)/payment-success.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { View } from "react-native";

export default function PaymentSuccess() {
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
        Pagamento confirmado ✅
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Recebemos o sinal. Teu horário está reservado e enviaremos os lembretes
        (24h/2h).
      </Text>

      <BCButton
        title="Concluir agendamento"
        onPress={() => router.push("/(tabs)/success" as any)}
      />
      <BCButton
        title="Voltar ao checkout"
        variant="secondary"
        onPress={() => router.back()}
      />
    </View>
  );
}
