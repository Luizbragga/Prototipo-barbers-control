// app/(tabs)/account.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { View } from "react-native";

export default function Account() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Conta
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Precisas mudar de papel? Vai para o seletor e escolhe Cliente, Admin ou
        Barbeiro.
      </Text>

      <BCButton
        title="Usar como Cliente"
        onPress={() => router.push("/(tabs)" as any)}
      />
      <BCButton
        title="Usar como Admin"
        variant="secondary"
        onPress={() => router.push("/(admin)" as any)}
      />
      <BCButton
        title="Usar como Barbeiro"
        variant="secondary"
        onPress={() => router.push("/(barber)" as any)}
      />
    </View>
  );
}
