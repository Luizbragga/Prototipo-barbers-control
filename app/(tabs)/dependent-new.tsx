// app/(tabs)/dependent-new.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { TextInput, View } from "react-native";

export default function DependentNew() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Novo dependente
      </Text>

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Nome completo
      </Text>
      <TextInput
        placeholder="ex.: Davi Silva"
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

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Parentesco
      </Text>
      <TextInput
        placeholder="Filho, Pai, Mãe..."
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

      <BCButton title="Salvar" onPress={() => router.push("/(tabs)/confirm")} />
    </View>
  );
}
