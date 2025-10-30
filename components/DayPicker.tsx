// components/DayPicker.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import React, { useEffect, useMemo, useRef } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

export function DayPicker({
  date,
  onChange,
}: {
  date: Date; // dia selecionado
  onChange: (d: Date) => void;
}) {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11
  const selectedDay = date.getDate();

  const days = useMemo(() => {
    const total = daysInMonth(year, month);
    return Array.from(
      { length: total },
      (_, i) => new Date(year, month, i + 1)
    );
  }, [year, month]);

  const scrollRef = useRef<ScrollView>(null);

  // estima largura de um chip para auto-scroll
  const CHIP = 56; // px aproximado (padding + borda + gap)
  useEffect(() => {
    const idx = selectedDay - 1;
    const x = Math.max(0, idx * (CHIP + 8) - 80);
    scrollRef.current?.scrollTo({ x, animated: true });
  }, [selectedDay, month, year]);

  const goPrevDay = () => onChange(addDays(date, -1));
  const goNextDay = () => onChange(addDays(date, +1));

  return (
    <View style={styles.wrap}>
      <Pressable onPress={goPrevDay} style={styles.arrow}>
        <Text variant="H3" style={styles.arrowTxt}>
          ‹
        </Text>
      </Pressable>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.days}
      >
        {days.map((d) => {
          const isSel = sameDay(d, date);
          return (
            <Pressable
              key={d.toISOString()}
              onPress={() => onChange(d)}
              style={[styles.day, isSel && styles.daySel]}
            >
              <Text
                variant="Caption"
                style={[styles.week, isSel && { color: BC.black }]}
              >
                {WEEKDAY[d.getDay()]}
              </Text>
              <Text variant="H3" style={{ color: isSel ? BC.black : BC.white }}>
                {d.getDate().toString().padStart(2, "0")}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Pressable onPress={goNextDay} style={styles.arrow}>
        <Text variant="H3" style={styles.arrowTxt}>
          ›
        </Text>
      </Pressable>
    </View>
  );
}

const WEEKDAY = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function daysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

const styles = StyleSheet.create({
  wrap: { flexDirection: "row", alignItems: "center", gap: 8 },
  arrow: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  arrowTxt: { color: BC.white },
  days: { gap: 8, paddingHorizontal: 4 },
  day: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 2,
    minWidth: 44,
  },
  daySel: { backgroundColor: BC.celeste, borderColor: BC.celeste },
  week: { color: BC.gray300 },
});
