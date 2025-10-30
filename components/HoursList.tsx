// components/HoursList.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export function HoursList({
  date,
  from = "09:00",
  to = "20:00",
  stepMin = 30,
  barber,
}: {
  date: Date;
  from?: string;
  to?: string;
  stepMin?: number;
  barber?: string;
}) {
  const slots = buildSlots(from, to, stepMin);
  const isoDay = date.toISOString().slice(0, 10);

  return (
    <View style={styles.card}>
      <Text variant="H2" style={{ color: BC.white, marginBottom: 8 }}>
        Horários
      </Text>
      {slots.map((h) => (
        <Pressable
          key={h}
          onPress={() =>
            router.push({
              pathname: "/(admin)/agenda",
              params: { date: isoDay, time: h, ...(barber ? { barber } : {}) },
            } as any)
          }
          style={styles.slot}
        >
          <Text variant="Body" style={{ color: BC.white }}>
            {h}
          </Text>
          <Text variant="Caption" style={{ color: BC.celeste }}>
            Agendar
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

function buildSlots(from: string, to: string, step: number) {
  const [fh, fm] = from.split(":").map(Number);
  const [th, tm] = to.split(":").map(Number);
  const start = fh * 60 + fm,
    end = th * 60 + tm;
  const out: string[] = [];
  for (let t = start; t <= end; t += step) {
    const h = Math.floor(t / 60)
      .toString()
      .padStart(2, "0");
    const m = (t % 60).toString().padStart(2, "0");
    out.push(`${h}:${m}`);
  }
  return out;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  slot: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 6,
  },
});
