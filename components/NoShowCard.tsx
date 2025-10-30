// components/NoShowCard.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { StyleSheet, View } from "react-native";

export function NoShowCard({ count }: { count: number }) {
  return (
    <View style={styles.card}>
      <Text variant="Caption" style={{ color: BC.gray300 }}>
        Não compareceu (semana)
      </Text>
      <Text variant="H1" style={{ color: BC.white, marginTop: 6 }}>
        {count}
      </Text>
      <Text variant="Caption" style={{ color: "#FF5A5A", marginTop: 6 }}>
        {count} esta semana
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    minWidth: 220,
  },
});
