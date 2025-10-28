// app/(barber)/profile.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function BarberProfile() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Perfil
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
          Rafa
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Comissão: 40%
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Histórico e metas em breve
        </Text>
      </View>
    </View>
  );
}
