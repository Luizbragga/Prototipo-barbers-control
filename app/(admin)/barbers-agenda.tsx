// app/(admin)/barbers-agenda.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

export default function BarbersAgenda() {
  const { barber } = useLocalSearchParams<{ barber?: string }>();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 16, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agenda do barbeiro
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Selecionado: {barber || "—"}
      </Text>

      {/* Prototipo por enquanto */}
      <Text variant="Body" style={{ color: BC.white }}>
        (Em breve: grade semanal, cards de horários, filtros…)
      </Text>
    </View>
  );
}
