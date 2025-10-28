// components/BCError.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";
import { BCButton } from "./BCButton";

type Props = {
  message?: string;
  onRetry: () => void;
};

export function BCError({
  message = "Algo deu errado ao carregar os dados.",
  onRetry,
}: Props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: BC.black,
        padding: 24,
        gap: 12,
        justifyContent: "center",
      }}
    >
      <Text variant="H1" style={{ color: BC.white }}>
        Erro
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        {message}
      </Text>
      <BCButton
        title="Tentar novamente"
        variant="secondary"
        onPress={onRetry}
      />
    </View>
  );
}
