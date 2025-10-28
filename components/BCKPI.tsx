// components/BCKPI.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

type Props = {
  label: string;
  value: string;
  delta?: string; // ex.: "+8%" ou "-3%"
};

export function BCKPI({ label, value, delta }: Props) {
  const isPositive = delta?.trim().startsWith("+");
  const deltaColor = delta ? (isPositive ? BC.success : BC.error) : BC.gray500;

  return (
    <View
      style={{
        backgroundColor: BC.ink,
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: BC.gray700,
        gap: 6,
        minWidth: 160,
      }}
    >
      <Text variant="Caption" style={{ color: BC.gray500 }}>
        {label}
      </Text>
      <Text variant="H1" style={{ color: BC.white }}>
        {value}
      </Text>
      {delta !== undefined && (
        <Text variant="Caption" style={{ color: deltaColor }}>
          {delta} vs ontem
        </Text>
      )}
    </View>
  );
}
