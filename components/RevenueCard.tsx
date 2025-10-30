// components/RevenueCard.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { StyleSheet, View } from "react-native";

export function RevenueCard({
  hidden,
  predicted,
  actual,
  delta,
}: {
  hidden: boolean;
  predicted: string;
  actual: string;
  delta?: string;
}) {
  return (
    <View style={styles.card}>
      <Text variant="Caption" style={{ color: BC.gray300 }}>
        Faturamento (dia)
      </Text>

      <View style={{ marginTop: 8, gap: 6 }}>
        <Row label="Previsto" value={hidden ? "••••" : predicted} />
        <Row label="Atual" value={hidden ? "••••" : actual} strong />
      </View>

      {!!delta && (
        <Text variant="Caption" style={{ color: "#00D48A", marginTop: 6 }}>
          {delta}
        </Text>
      )}
    </View>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <View style={styles.row}>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        {label}
      </Text>
      <Text
        variant="H2"
        style={{
          color: BC.white,
          fontWeight: strong ? ("800" as any) : ("700" as any),
        }}
      >
        {value}
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
    minWidth: 260,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
