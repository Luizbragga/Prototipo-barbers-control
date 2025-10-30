// components/VisibilityToggle.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Pressable, StyleSheet, View } from "react-native";

export function VisibilityToggle({
  hidden,
  onToggle,
  label = "Ocultar valores",
}: {
  hidden: boolean;
  onToggle: () => void;
  label?: string;
}) {
  return (
    <Pressable onPress={onToggle} style={styles.wrap} hitSlop={8}>
      <View
        style={[
          styles.pill,
          hidden && {
            backgroundColor: "transparent",
            borderColor: BC.gray700,
            borderWidth: 1,
          },
        ]}
      >
        <Text
          variant="Caption"
          style={{ color: hidden ? BC.gray300 : BC.white }}
        >
          {hidden ? "👁️‍🗨️ Mostrar" : "👁️ Ocultar"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", justifyContent: "center" },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.06)",
  },
});
