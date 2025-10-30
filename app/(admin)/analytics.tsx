// app/(admin)/analytics.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Analytics() {
  // mocks iniciais
  const periodo = "01/10/2025 – 31/10/2025";
  const kpis = [
    {
      label: "Receita (período)",
      value: "R$ 18.240",
      delta: "+9% vs mês anterior",
    },
    {
      label: "Previsão (agendado)",
      value: "R$ 20.300",
      delta: "+5% vs mês anterior",
    },
    { label: "Ocupação média", value: "74%", delta: "+6 pp" },
    { label: "No-show", value: "8", delta: "-3 vs mês anterior" },
    { label: "Ticket médio", value: "R$ 72", delta: "+R$ 4" },
  ];

  const topServicos = [
    { nome: "Corte", qtd: 142, receita: "R$ 6.390" },
    { nome: "Corte + Barba", qtd: 96, receita: "R$ 7.680" },
    { nome: "Barba", qtd: 61, receita: "R$ 2.135" },
  ];

  const porBarbeiro = [
    { nome: "Henrique", atend: 110, receita: "R$ 8.900", ocup: "78%" },
    { nome: "Carlos", atend: 85, receita: "R$ 6.420", ocup: "70%" },
    { nome: "Gustavo", atend: 62, receita: "R$ 4.920", ocup: "65%" },
  ];

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.container}>
      {/* topo */}
      <View style={s.header}>
        <Text variant="H1" style={{ color: BC.white }}>
          Análise completa
        </Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Link href="/(admin)" asChild>
            <Text variant="Body" style={s.linkBtn}>
              ← Voltar ao dashboard
            </Text>
          </Link>
          <Text variant="Body" style={[s.badge]}>
            {periodo}
          </Text>
        </View>
      </View>

      {/* KPIs */}
      <View style={s.grid}>
        {kpis.map((k) => (
          <View key={k.label} style={s.card}>
            <Text variant="Caption" style={s.dim}>
              {k.label}
            </Text>
            <Text variant="H2" style={{ color: BC.white }}>
              {k.value}
            </Text>
            <Text
              variant="Caption"
              style={[
                s.delta,
                { color: k.delta.includes("-") ? "#F87171" : "#34D399" },
              ]}
            >
              {k.delta}
            </Text>
          </View>
        ))}
      </View>

      {/* Gráficos (placeholders de UI) */}
      <View style={s.grid}>
        <View style={[s.card, s.chart]}>
          <Text variant="Body" style={s.dim}>
            Receita por dia (linha)
          </Text>
          <View style={s.chartBox}>
            <Text variant="Caption" style={s.dim}>
              [gráfico linha]
            </Text>
          </View>
        </View>
        <View style={[s.card, s.chart]}>
          <Text variant="Body" style={s.dim}>
            Ocupação por dia (barra)
          </Text>
          <View style={s.chartBox}>
            <Text variant="Caption" style={s.dim}>
              [gráfico barra]
            </Text>
          </View>
        </View>
        <View style={[s.card, s.chart]}>
          <Text variant="Body" style={s.dim}>
            No-show por semana
          </Text>
          <View style={s.chartBox}>
            <Text variant="Caption" style={s.dim}>
              [gráfico colunas]
            </Text>
          </View>
        </View>
      </View>

      {/* Tabelas simples */}
      <View style={s.card}>
        <Text variant="H3" style={{ color: BC.white, marginBottom: 12 }}>
          Top serviços
        </Text>
        {topServicos.map((s1) => (
          <View key={s1.nome} style={s.row}>
            <Text variant="Body" style={{ color: BC.white, flex: 1 }}>
              {s1.nome}
            </Text>
            <Text variant="Body" style={s.dim}>
              {s1.qtd} atend.
            </Text>
            <Text
              variant="Body"
              style={{ color: BC.white, width: 100, textAlign: "right" }}
            >
              {s1.receita}
            </Text>
          </View>
        ))}
      </View>

      <View style={s.card}>
        <Text variant="H3" style={{ color: BC.white, marginBottom: 12 }}>
          Performance por barbeiro
        </Text>
        {porBarbeiro.map((b) => (
          <View key={b.nome} style={s.row}>
            <Text variant="Body" style={{ color: BC.white, flex: 1 }}>
              {b.nome}
            </Text>
            <Text variant="Body" style={s.dim}>
              {b.atend} atend.
            </Text>
            <Text variant="Body" style={s.dim}>
              {b.ocup}
            </Text>
            <Text
              variant="Body"
              style={{ color: BC.white, width: 100, textAlign: "right" }}
            >
              {b.receita}
            </Text>
          </View>
        ))}
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
  badge: {
    color: BC.white,
    opacity: 0.8,
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
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
  chart: { minWidth: 320, flexBasis: "48%" },
  chartBox: {
    height: 180,
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.06)",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dim: { color: BC.white, opacity: 0.7 },
  delta: { marginTop: 2 },
});
