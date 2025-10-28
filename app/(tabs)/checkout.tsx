// app/(tabs)/checkout.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function CheckoutSinal() {
  const methods = ["Cartão", "MB Way", "Pix"];
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Pagar sinal (opcional)
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Escolhe o método de pagamento:
      </Text>

      {methods.map((m) => (
        <Pressable
          key={m}
          style={{
            backgroundColor: BC.ink,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
            padding: 14,
          }}
        >
          <Text variant="H3" style={{ color: BC.white }}>
            {m}
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            Simulação — estado sucesso/erro a seguir
          </Text>
        </Pressable>
      ))}

      <Link href="/(tabs)/payment-success" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Pagar agora (mock)
          </Text>
        </Pressable>
      </Link>

      <Link href="/(tabs)/payment-error" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.error,
            padding: 14,
            borderRadius: 12,
            marginTop: 8,
          }}
        >
          <Text variant="H3" style={{ color: BC.error, textAlign: "center" }}>
            Simular erro de pagamento
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
            Voltar
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
