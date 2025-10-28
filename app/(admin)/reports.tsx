// app/(admin)/reports.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function Reports() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Relatórios
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Em breve: heatmap semanal por hora/dia, coortes (30/60/90d), origem de
        prospecção e ticket médio.
      </Text>
    </View>
  );
}
