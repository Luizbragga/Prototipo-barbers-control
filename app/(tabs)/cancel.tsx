// app/(tabs)/cancel.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function CancelBooking() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Cancelar agendamento
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Cancelamentos a menos de 4h do horário podem gerar taxa de não
        comparecimento.
      </Text>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          gap: 6,
        }}
      >
        <Text variant="H3" style={{ color: BC.white }}>
          Hoje • 11:00
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Corte clássico (30m) • Rafa • Unidade Centro
        </Text>
      </View>

      <Link href="/(tabs)/success" asChild>
        <Pressable
          style={{ backgroundColor: BC.error, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.white, textAlign: "center" }}>
            Confirmar cancelamento
          </Text>
        </Pressable>
      </Link>

      <Link href="/(tabs)/two" asChild>
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
