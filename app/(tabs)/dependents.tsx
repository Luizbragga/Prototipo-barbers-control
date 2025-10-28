// app/(tabs)/dependents.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Dependents() {
  const list = ["Davi (filho)", "Adicionar novo…"];

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agendar para
      </Text>

      {list.map((n) =>
        n === "Adicionar novo…" ? (
          <Link key={n} href="/(tabs)/dependent-new" asChild>
            <Pressable
              style={{
                backgroundColor: BC.ink,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: BC.gray700,
                padding: 14,
              }}
            >
              <Text variant="H3" style={{ color: BC.white }}>
                {n}
              </Text>
            </Pressable>
          </Link>
        ) : (
          <Pressable
            key={n}
            style={{
              backgroundColor: BC.ink,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: BC.gray700,
              padding: 14,
            }}
          >
            <Text variant="H3" style={{ color: BC.white }}>
              {n}
            </Text>
          </Pressable>
        )
      )}

      <Link href="/(tabs)/confirm" asChild>
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
