// app/(tabs)/time.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function AgendarStep4() {
  // Sem vagas hoje (mock)
  const slots: { t: string; free: boolean }[] = [];

  const hasSlots = slots.length > 0;

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agendar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Passo 4 de 4 — Escolhe o horário
      </Text>

      {!hasSlots ? (
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
            Sem vagas hoje
          </Text>
          <Text variant="Body" style={{ color: BC.gray300 }}>
            Tenta outro dia ou escolhe outro barbeiro/serviço.
          </Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
          {slots.map((s) => (
            <Pressable
              key={s.t}
              disabled={!s.free}
              style={{
                backgroundColor: s.free ? BC.ink : BC.gray700,
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: BC.gray700,
                opacity: s.free ? 1 : 0.5,
              }}
            >
              <Text variant="H3" style={{ color: BC.white }}>
                {s.t}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {/* Confirmar: desativado se não houver vagas */}
      {hasSlots ? (
        <Link href="/(tabs)/confirm" asChild>
          <Pressable
            style={{
              marginTop: 12,
              backgroundColor: BC.celeste,
              padding: 14,
              borderRadius: 12,
            }}
          >
            <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
              Confirmar
            </Text>
          </Pressable>
        </Link>
      ) : (
        <Pressable
          disabled
          style={{
            marginTop: 12,
            backgroundColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
            opacity: 0.5,
          }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Confirmar
          </Text>
        </Pressable>
      )}
    </View>
  );
}
