// app/(admin)/cash-locked.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { View } from "react-native";

export default function CashLocked() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Caixa — fechado
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Este fechamento está <Text style={{ color: BC.success }}>travado</Text>.
        Edições não são permitidas após o encerramento.
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
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Dinheiro: R$ 220
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Cartão: R$ 480
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Pix: R$ 140
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Diferença: R$ 0,00
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Anexo Z-report: foto_24-10.jpg (mock)
        </Text>
      </View>

      <BCButton
        title="Exportar PDF/CSV"
        variant="secondary"
        onPress={() => router.push("/(admin)/export" as any)}
      />
      <BCButton
        title="Voltar ao Caixa"
        onPress={() => router.push("/(admin)/cash" as any)}
      />
    </View>
  );
}
