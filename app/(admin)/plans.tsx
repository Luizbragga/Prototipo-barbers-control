// app/(admin)/plans.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Plans() {
  const plans = [
    { name: "Solo", price: "R$79/€19", note: "1 barbeiro" },
    { name: "Equipe", price: "R$159/€39", note: "até 5 barbeiros" },
    { name: "Pro", price: "R$299/€69", note: "ilimitado + campanhas" },
  ];
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Planos
      </Text>
      {plans.map((p) => (
        <View
          key={p.name}
          style={{
            backgroundColor: BC.ink,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
            padding: 16,
            gap: 6,
          }}
        >
          <Text variant="H3" style={{ color: BC.white }}>
            {p.name} • {p.price}
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            {p.note} • trial 14 dias
          </Text>
          <Link href="/(admin)/checkout-plan" asChild>
            <Pressable
              style={{
                marginTop: 8,
                backgroundColor: BC.celeste,
                padding: 12,
                borderRadius: 12,
              }}
            >
              <Text
                variant="H3"
                style={{ color: BC.black, textAlign: "center" }}
              >
                Escolher
              </Text>
            </Pressable>
          </Link>
        </View>
      ))}
    </View>
  );
}
