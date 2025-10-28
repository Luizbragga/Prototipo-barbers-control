// app/(tabs)/assistant.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Pressable, TextInput, View } from "react-native";

export default function Assistant() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 16, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Assistente
      </Text>
      <View
        style={{
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
          gap: 8,
        }}
      >
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Sugestões
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          • “Quero agendar corte amanhã às 18h”
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          • “Quais serviços a Ana faz?”
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          • “Como funciona o no-show?”
        </Text>
      </View>

      <View style={{ marginTop: "auto", gap: 8 }}>
        <TextInput
          placeholder="Escreve tua pergunta…"
          placeholderTextColor={BC.gray500}
          style={{
            color: BC.white,
            backgroundColor: BC.ink,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
            padding: 12,
          }}
        />
        <Pressable
          style={{ backgroundColor: BC.celeste, padding: 12, borderRadius: 12 }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Enviar (mock)
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
