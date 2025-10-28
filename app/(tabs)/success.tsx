// app/(tabs)/success.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function AgendarSuccess() {
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
        Agendamento confirmado 🎉
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Enviamos a confirmação e os lembretes (24h/2h). Chega 5 min antes 😉
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
          Centro • 11:00
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Corte clássico (30m) com Rafa
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Preço: €15 / R$45
        </Text>
      </View>

      <Link href="/(tabs)" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Voltar ao início
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
