// app/(barber)/today.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Pressable, View } from "react-native";

export default function BarberToday() {
  const next = {
    h: "11:00",
    cliente: "João",
    servico: "Corte (30m)",
    status: "confirmado",
  };

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Hoje
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
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Próximo
        </Text>
        <Text variant="H3" style={{ color: BC.white }}>
          {next.h} • {next.cliente}
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          {next.servico} • {next.status}
        </Text>

        <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
          <Pressable
            style={{
              backgroundColor: BC.celeste,
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
              Check-in
            </Text>
          </Pressable>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: BC.celeste,
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text
              variant="H3"
              style={{ color: BC.celeste, textAlign: "center" }}
            >
              Concluir
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
