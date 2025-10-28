// components/WeekGrid.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

type Slot = {
  day: string;
  time: string;
  text?: string;
  status?: "reservado" | "confirmado" | "no-show";
};
type Props = { days: string[]; times: string[]; items: Slot[] };

export function WeekGrid({ days, times, items }: Props) {
  const color = (s?: string) =>
    s === "confirmado" ? BC.celeste : s === "no-show" ? BC.error : BC.gray700;

  return (
    <View style={{ backgroundColor: BC.black }}>
      {/* Cabeçalho de dias */}
      <View style={{ flexDirection: "row", paddingHorizontal: 12 }}>
        <View style={{ width: 64 }} />
        {days.map((d) => (
          <View key={d} style={{ flex: 1, padding: 8 }}>
            <Text variant="Caption" style={{ color: BC.gray500 }}>
              {d}
            </Text>
          </View>
        ))}
      </View>

      {/* Linhas de horários */}
      {times.map((t) => (
        <View key={t} style={{ flexDirection: "row" }}>
          {/* hora */}
          <View style={{ width: 64, padding: 8 }}>
            <Text variant="Caption" style={{ color: BC.gray500 }}>
              {t}
            </Text>
          </View>
          {/* colunas/dias */}
          {days.map((d) => {
            const it = items.find((x) => x.day === d && x.time === t);
            return (
              <View
                key={d}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: BC.gray700,
                  height: 48,
                  padding: 6,
                  backgroundColor: it ? color(it.status) : "transparent",
                }}
              >
                {!!it && (
                  <Text
                    variant="Caption"
                    style={{
                      color: it.status === "confirmado" ? BC.black : BC.white,
                    }}
                    numberOfLines={1}
                  >
                    {it.text}
                  </Text>
                )}
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
}
