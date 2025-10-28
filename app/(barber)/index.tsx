// app/(barber)/index.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { WeekGrid } from "@/components/WeekGrid";
import { View } from "react-native";

export default function BarberAgenda() {
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  // mocks de marcações
  const items = [
    {
      day: "Seg",
      time: "09:00",
      text: "João • Corte (30m)",
      status: "confirmado",
    },
    {
      day: "Ter",
      time: "10:00",
      text: "Miguel • Barba (30m)",
      status: "reservado",
    },
    {
      day: "Qua",
      time: "11:00",
      text: "Pedro • Combo (60m)",
      status: "no-show",
    },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 16, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Minha agenda — semana
      </Text>
      <WeekGrid days={days} times={times} items={items as any} />
    </View>
  );
}
