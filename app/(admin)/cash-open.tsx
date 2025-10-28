// app/(admin)/cash-open.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, TextInput, View } from "react-native";

export default function CashOpen() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Abrir sessão
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Define o saldo inicial do caixa de hoje.
      </Text>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          gap: 8,
        }}
      >
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Saldo inicial (Dinheiro)
        </Text>
        <TextInput
          placeholder="ex.: 200,00"
          placeholderTextColor={BC.gray500}
          keyboardType="numeric"
          style={{
            color: BC.white,
            padding: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
          }}
        />
      </View>

      <Link href="/(admin)/cash-session" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Iniciar sessão
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
