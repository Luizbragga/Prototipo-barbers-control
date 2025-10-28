// app/(admin)/cash-session.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function CashSession() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Caixa — sessão aberta
      </Text>

      {/* Resumo do dia (mock) */}
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
          Saídas: R$ 20 (Água/CAFÉ)
        </Text>
      </View>

      {/* Ações rápidas */}
      <View style={{ flexDirection: "row", gap: 12, flexWrap: "wrap" }}>
        {/* Registrar entrada */}
        <Link href="/(admin)/cash-move" asChild>
          <Pressable
            style={{
              backgroundColor: BC.celeste,
              padding: 14,
              borderRadius: 12,
              minWidth: 160,
            }}
          >
            <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
              Registrar entrada
            </Text>
          </Pressable>
        </Link>

        {/* Registrar saída */}
        <Link href="/(admin)/cash-move" asChild>
          <Pressable
            style={{
              borderWidth: 1,
              borderColor: BC.celeste,
              padding: 14,
              borderRadius: 12,
              minWidth: 160,
            }}
          >
            <Text
              variant="H3"
              style={{ color: BC.celeste, textAlign: "center" }}
            >
              Registrar saída
            </Text>
          </Pressable>
        </Link>

        {/* Iniciar fechamento (leva ao wizard de fechar) */}
        <Link href="/(admin)/cash-close" asChild>
          <Pressable
            style={{
              backgroundColor: BC.success,
              padding: 14,
              borderRadius: 12,
              minWidth: 160,
            }}
          >
            <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
              Fechar caixa
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
