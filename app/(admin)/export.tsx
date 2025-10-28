// app/(admin)/export.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { View } from "react-native";

export default function CashExport() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BC.black,
        padding: 24,
        gap: 16,
        justifyContent: "center",
      }}
    >
      <Text variant="H1" style={{ color: BC.white }}>
        Exportar caixa
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Escolhe o formato para exportar o fechamento de hoje.
      </Text>

      <BCButton
        title="Exportar PDF (mock)"
        onPress={() => alert("PDF gerado (simulado).")}
      />
      <BCButton
        title="Exportar CSV (mock)"
        onPress={() => alert("CSV gerado (simulado).")}
      />
      <BCButton
        title="Voltar"
        variant="secondary"
        onPress={() => router.back()}
      />
    </View>
  );
}
