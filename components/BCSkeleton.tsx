// components/BCSkeleton.tsx
import { BC } from "@/app/theme";
import { View } from "react-native";

type Props = { rows?: number; height?: number; gap?: number };

export function BCSkeleton({ rows = 3, height = 56, gap = 12 }: Props) {
  return (
    <View style={{ padding: 24, backgroundColor: BC.black, gap }}>
      {Array.from({ length: rows }).map((_, i) => (
        <View
          key={i}
          style={{
            height,
            borderRadius: 12,
            backgroundColor: BC.ink,
            borderWidth: 1,
            borderColor: BC.gray700,
            opacity: 0.6,
          }}
        />
      ))}
    </View>
  );
}
