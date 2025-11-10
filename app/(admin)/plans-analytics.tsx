// app/(admin)/plans-analytics.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function PlansAnalytics() {
  // mocks iniciais (substituir depois por dados reais)
  const kpis = [
    { label: "Planos ativos", value: "126" },
    { label: "MRR (mensal recorrente)", value: "R$ 7.560" },
    { label: "Churn (30d)", value: "2,1%" },
    { label: "Novos no mês", value: "34" },
  ];

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.container}>
      <View style={s.header}>
        <Text variant="H1" style={{ color: BC.white }}>
          Análise de planos
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Link href="/(admin)" asChild>
            <Text variant="Body" style={s.linkBtn}>
              ← Voltar ao dashboard
            </Text>
          </Link>
        </View>
      </View>

      <View style={s.grid}>
        {kpis.map((k) => (
          <View key={k.label} style={s.card}>
            <Text variant="Caption" style={s.dim}>
              {k.label}
            </Text>
            <Text variant="H2" style={{ color: BC.white }}>
              {k.value}
            </Text>
          </View>
        ))}
      </View>

      <View style={[s.card, { minWidth: 320 }]}>
        <Text variant="Body" style={s.dim}>
          Adesões por dia (30d)
        </Text>
        <View style={s.chartBox}>
          <Text variant="Caption" style={s.dim}>
            [gráfico linha]
          </Text>
        </View>
      </View>

      <View style={[s.card, { minWidth: 320 }]}>
        <Text variant="Body" style={s.dim}>
          Cancelamentos por motivo
        </Text>
        <View style={s.chartBox}>
          <Text variant="Caption" style={s.dim}>
            [gráfico pizza]
          </Text>
        </View>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: BC.black },
  container: { padding: 16, gap: 16 },
  header: { gap: 8 },
  linkBtn: {
    color: BC.celeste,
    backgroundColor: "rgba(53,225,242,0.12)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 16 },
  card: {
    flexGrow: 1,
    minWidth: 260,
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 6,
  },
  dim: { color: BC.gray300 },
  chartBox: {
    marginTop: 8,
    height: 160,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: BC.gray700,
    alignItems: "center",
    justifyContent: "center",
  },
});
