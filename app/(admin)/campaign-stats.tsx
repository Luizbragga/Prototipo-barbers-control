// app/(admin)/campaign-stats.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { BCKPI } from "@/components/BCKPI";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { View } from "react-native";

export default function CampaignStats() {
  // mocks de métricas
  const sent = 126;
  const clicks = 38;
  const bookings = 12;
  const revenue = "€ 360"; // supõe €30 por agendamento
  const cost = "€ 6,30"; // ex.: R$0,30 por SMS → aqui só ilustrativo
  const roi = "+472%";

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Campanha — Métricas
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Acompanhamento (mock): enviados, cliques, agendamentos e ROI estimado.
      </Text>

      <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
        <BCKPI label="Enviados" value={String(sent)} />
        <BCKPI label="Cliques" value={String(clicks)} delta="+9%" />
        <BCKPI
          label="Agendamentos gerados"
          value={String(bookings)}
          delta="+3%"
        />
        <BCKPI label="Receita estimada" value={revenue} />
        <BCKPI label="Custo" value={cost} />
        <BCKPI label="ROI" value={roi} delta="+%" />
      </View>

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
          Resumo
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Segmento: Inativos 60d • Canal: WhatsApp • Oferta: –15% no Corte
          clássico.
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Link curto: bc.app/r/123 • Período: 3 dias (simulação).
        </Text>
      </View>

      <View style={{ gap: 8, marginTop: 8 }}>
        <BCButton
          title="Enviar nova campanha"
          onPress={() => router.push("/(admin)/campaign-new" as any)}
        />
        <BCButton
          title="Voltar às campanhas"
          variant="secondary"
          onPress={() => router.push("/(admin)/campaigns" as any)}
        />
      </View>
    </View>
  );
}
