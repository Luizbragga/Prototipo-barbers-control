// app/(admin)/agenda.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { WeekGrid } from "@/components/WeekGrid";
import { View } from "react-native";

export default function AdminAgenda() {
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  // mocks (validação por recurso: mesmo horário em barbeiros diferentes é OK)
  const items = [
    {
      day: "Seg",
      time: "09:00",
      text: "João • Corte (Rafa)",
      status: "confirmado",
    },
    {
      day: "Ter",
      time: "10:00",
      text: "Miguel • Barba (Ana)",
      status: "reservado",
    },
    {
      day: "Qua",
      time: "11:00",
      text: "Pedro • Combo (Gio)",
      status: "no-show",
    },
  ] as const;

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 16, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agenda — semana
      </Text>
      <WeekGrid days={days} times={times} items={items as any} />
      <Text variant="Caption" style={{ color: BC.gray500, marginTop: 8 }}>
        Nota: validação por recurso — dois agendamentos no mesmo horário são
        permitidos se forem barbeiros diferentes.
      </Text>
    </View>
  );
}
