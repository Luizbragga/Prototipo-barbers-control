// app/(tabs)/payment-error.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function PaymentError() {
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
        Pagamento não concluído
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Ocorreu um problema ao processar o sinal. Tenta novamente ou escolhe
        outro método.
      </Text>

      <Link href="/(tabs)/checkout" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Tentar novamente
          </Text>
        </Pressable>
      </Link>

      <Link href="/(tabs)/confirm" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Voltar à confirmação
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
