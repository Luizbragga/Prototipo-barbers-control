// app/(tabs)/reschedule.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Reschedule() {
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Reagendar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Escolhe um novo horário
      </Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 12 }}>
        {slots.map((t) => (
          <Pressable
            key={t}
            style={{
              backgroundColor: BC.ink,
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: BC.gray700,
            }}
          >
            <Text variant="H3" style={{ color: BC.white }}>
              {t}
            </Text>
          </Pressable>
        ))}
      </View>

      <Link href="/(tabs)/success" asChild>
        <Pressable
          style={{
            marginTop: 12,
            backgroundColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Confirmar novo horário
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
