// app/(public)/welcome.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Welcome() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BC.black,
        padding: 24,
        justifyContent: "center",
        gap: 24,
      }}
    >
      <Text variant="H1" style={{ color: BC.white }}>
        Barbers Control
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Controle total da tua barbearia.
      </Text>

      {/* Agendar rápido (sem conta) */}
      <Link href="/(tabs)" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Agendar rápido
          </Text>
        </Pressable>
      </Link>

      {/* Entrar / Criar conta (Admin/Barbeiro/Cliente) */}
      <Link href="/(public)/login" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Entrar / Criar conta
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
