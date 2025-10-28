// app/(tabs)/wallet.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function Carteira() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BC.black,
        padding: 24,
        gap: 12,
        justifyContent: "center",
      }}
    >
      <Text variant="H1" style={{ color: BC.white }}>
        Carteira
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Ainda não tens pontos. Agenda serviços para acumular e trocar por
        benefícios.
      </Text>
      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Ex.: 1 ponto = €1. Resgates aparecem aqui.
      </Text>
    </View>
  );
}
