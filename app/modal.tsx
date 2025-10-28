// app/modal.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link, router } from "expo-router";
import { Pressable, View } from "react-native";

export default function RoleSelector() {
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
        Entrar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Escolhe teu papel para continuar:
      </Text>

      {/* Cliente → por enquanto abre as abas (fluxo já pronto) */}
      <Link href="/(tabs)" asChild>
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 14, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Cliente
          </Text>
        </Pressable>
      </Link>

      {/* Admin e Barbeiro: placeholder por enquanto */}
      <Pressable
        onPress={() => router.push("/(admin)" as any)}
        style={{
          borderWidth: 1,
          borderColor: BC.celeste,
          padding: 14,
          borderRadius: 12,
        }}
      >
        <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
          Admin
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/(barber)" as any)}
        style={{
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 14,
          borderRadius: 12,
        }}
      >
        <Text variant="H3" style={{ color: BC.gray300, textAlign: "center" }}>
          Barbeiro
        </Text>
      </Pressable>
    </View>
  );
}
