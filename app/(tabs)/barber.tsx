// app/(tabs)/barber.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function AgendarStep3() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agendar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Passo 3 de 4 — Escolhe o barbeiro (opcional)
      </Text>

      {["Rafa", "Gio", "Ana"].map((b) => (
        <Pressable
          key={b}
          style={{
            backgroundColor: BC.ink,
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
          }}
        >
          <Text variant="H3" style={{ color: BC.white }}>
            {b}
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            Hoje: agenda 60% ocupada
          </Text>
        </Pressable>
      ))}

      <Link href="/(tabs)/time" asChild>
        <Pressable
          style={{
            marginTop: 8,
            backgroundColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Continuar
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
