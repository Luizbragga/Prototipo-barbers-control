// app/(admin)/cash.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";
export default function AdminCash() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Caixa
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Abre uma sessão para registrar entradas/saídas e fechar no fim do dia.
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
        <Text variant="H3" style={{ color: BC.white }}>
          Sessão de hoje
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Status: não iniciada
        </Text>
      </View>

      <Link href="/(admin)/cash-open" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Abrir sessão
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
