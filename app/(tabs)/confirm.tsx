// app/(tabs)/confirm.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { Link, router } from "expo-router";
import { Pressable, View } from "react-native";

export default function ConfirmarAgendamento() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Confirmar
      </Text>
      <Link href="/(tabs)/dependents" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 12,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Agendar para dependente
          </Text>
        </Pressable>
      </Link>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Revê os detalhes e confirma o agendamento.
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
          Unidade: Centro
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Serviço: Corte clássico (30m)
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Barbeiro: Rafa
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Horário: 11:00
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Para: Davi (dependente)
        </Text>

        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Preço: €15 / R$45
        </Text>
      </View>
      <Link href="/(tabs)/checkout" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Pagar sinal (opcional)
          </Text>
        </Pressable>
      </Link>
      <BCButton
        title="Finalizar"
        onPress={() => router.push("/(tabs)/success")}
      />
    </View>
  );
}
