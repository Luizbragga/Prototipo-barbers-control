// app/(admin)/cash-close.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function CashClose() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Fechar caixa
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Revise os totais por método antes de fechar. Depois, as edições ficam
        bloqueadas.
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
      </View>
      <Link href="/(admin)/export" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Exportar (PDF/CSV)
          </Text>
        </Pressable>
      </Link>
      <Link href="/(admin)/cash-locked" asChild>
        <Pressable
          style={{ backgroundColor: BC.success, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Finalizar fechamento
          </Text>
        </Pressable>
      </Link>
      <Link href="/(admin)/cash-session" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Voltar
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
