// app/(admin)/index.tsx
import { BC } from "@/app/theme";
import { BCKPI } from "@/components/BCKPI";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function AdminHome() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Dashboard — Admin
      </Text>

      {/* Cards KPI (agora com componente padrão) */}
      <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
        <BCKPI label="Ocupação hoje" value="60%" delta="+8%" />
        <BCKPI label="Faturamento (dia)" value="R$ 840" delta="+12%" />
        <BCKPI label="No-show (semana)" value="1" delta="-1" />
      </View>

      {/* Placeholder para atalhos */}
      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
        }}
      >
        <Text variant="H3" style={{ color: BC.white }}>
          Atalhos
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Abrir caixa • Ver agenda • Criar campanha
        </Text>
      </View>
    </View>
  );
}
