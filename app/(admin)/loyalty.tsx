// app/(admin)/loyalty.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Pressable, View } from "react-native";

export default function LoyaltyAdmin() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Fidelidade
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
          Regras
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          • Por valor: 1 ponto = €1/R$1
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          • Por visita: +10 pts por serviço
        </Text>
        <Pressable
          style={{
            marginTop: 8,
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Editar regras (mock)
          </Text>
        </Pressable>
      </View>

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
          Carteiras
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          João — 120 pts • Próximo resgate: 150
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Resgates e histórico em breve
        </Text>
      </View>
    </View>
  );
}
