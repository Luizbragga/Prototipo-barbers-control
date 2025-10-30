// components/PeriodFilter.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  anchorDate: Date;
  onPickYear: (year: number) => void;
  onPickMonth: (year: number, month0_11: number) => void;
  onPickRange: (start: Date, end: Date) => void;
  onOpenAnalytics?: () => void;
};

export function PeriodFilter({
  anchorDate,
  onPickYear,
  onPickMonth,
  onPickRange,
  onOpenAnalytics,
}: Props) {
  const [open, setOpen] = React.useState<null | "year" | "month" | "range">(
    null
  );

  // navegação de ano/mês
  const [yearBrowse, setYearBrowse] = React.useState(anchorDate.getFullYear());
  const [monthBrowse, setMonthBrowse] = React.useState(anchorDate.getMonth());

  // seleção do range
  const [rangeStart, setRangeStart] = React.useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = React.useState<Date | null>(null);

  // quando abrir os painéis, sincroniza com a ancora
  React.useEffect(() => {
    setYearBrowse(anchorDate.getFullYear());
    setMonthBrowse(anchorDate.getMonth());
  }, [anchorDate]);

  const closeAll = () => setOpen(null);

  // utilitários de calendário
  const monthName = (m: number) =>
    [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ][m];

  const weeks = React.useMemo(
    () => buildMonthMatrix(yearBrowse, monthBrowse),
    [yearBrowse, monthBrowse]
  );

  const isInRange = (d: Date) => {
    if (!rangeStart) return false;
    if (rangeStart && !rangeEnd) return sameDay(d, rangeStart);
    if (rangeStart && rangeEnd) {
      const a = +stripTime(rangeStart);
      const b = +stripTime(rangeEnd);
      const x = +stripTime(d);
      return x >= Math.min(a, b) && x <= Math.max(a, b);
    }
    return false;
  };

  const onPickDay = (d: Date) => {
    if (!rangeStart || (rangeStart && rangeEnd)) {
      setRangeStart(d);
      setRangeEnd(null);
    } else {
      setRangeEnd(d);
    }
  };

  const applyRange = () => {
    if (!rangeStart) return;
    const start = stripTime(rangeStart);
    const end = stripTime(rangeEnd ?? rangeStart);
    const s = +start <= +end ? start : end;
    const e = +start <= +end ? end : start;
    onPickRange(s, e);
    closeAll();
  };

  return (
    <View style={[styles.wrap, open && { zIndex: 9999 }]}>
      <View style={styles.row}>
        <Pressable
          style={styles.btn}
          onPress={() => setOpen(open === "year" ? null : "year")}
        >
          <Text variant="Body" style={styles.btnText}>
            Selecionar ano ▾
          </Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => setOpen(open === "month" ? null : "month")}
        >
          <Text variant="Body" style={styles.btnText}>
            Selecionar mês ▾
          </Text>
        </Pressable>

        <Pressable
          style={styles.btn}
          onPress={() => setOpen(open === "range" ? null : "range")}
        >
          <Text variant="Body" style={styles.btnText}>
            Ajuste de período ▾
          </Text>
        </Pressable>

        <Pressable
          style={[styles.btn, { backgroundColor: BC.celeste }]}
          onPress={onOpenAnalytics}
        >
          <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
            Análise completa
          </Text>
        </Pressable>
      </View>

      {/* Painel: Selecionar ano */}
      {open === "year" && (
        <View style={styles.panel}>
          <View style={styles.yearHeader}>
            <Pressable
              style={styles.pill}
              onPress={() => setYearBrowse((y) => y - 1)}
            >
              <Text variant="Body" style={styles.textDim}>
                ‹
              </Text>
            </Pressable>
            <Text variant="Body" style={styles.textMain}>
              {yearBrowse}
            </Text>
            <Pressable
              style={styles.pill}
              onPress={() => setYearBrowse((y) => y + 1)}
            >
              <Text variant="Body" style={styles.textDim}>
                ›
              </Text>
            </Pressable>
          </View>

          <View style={styles.yearGrid}>
            {Array.from({ length: 12 }, (_, i) => yearBrowse - 6 + i).map(
              (y) => (
                <Pressable
                  key={y}
                  style={[
                    styles.yearCell,
                    y === anchorDate.getFullYear() && styles.sel,
                  ]}
                  onPress={() => {
                    onPickYear(y);
                    closeAll();
                  }}
                >
                  <Text variant="Body" style={{ color: BC.white }}>
                    {y}
                  </Text>
                </Pressable>
              )
            )}
          </View>
        </View>
      )}

      {/* Painel: Selecionar mês */}
      {open === "month" && (
        <View style={styles.panel}>
          <View style={styles.yearHeader}>
            <Pressable
              style={styles.pill}
              onPress={() => setYearBrowse((y) => y - 1)}
            >
              <Text variant="Body" style={styles.textDim}>
                ‹ ano
              </Text>
            </Pressable>
            <Text variant="Body" style={styles.textMain}>
              {yearBrowse}
            </Text>
            <Pressable
              style={styles.pill}
              onPress={() => setYearBrowse((y) => y + 1)}
            >
              <Text variant="Body" style={styles.textDim}>
                ano ›
              </Text>
            </Pressable>
          </View>

          <View style={styles.monthGrid}>
            {Array.from({ length: 12 }, (_, m) => (
              <Pressable
                key={m}
                style={[
                  styles.monthCell,
                  m === anchorDate.getMonth() &&
                    yearBrowse === anchorDate.getFullYear() &&
                    styles.sel,
                ]}
                onPress={() => {
                  onPickMonth(yearBrowse, m);
                  closeAll();
                }}
              >
                <Text variant="Body" style={{ color: BC.white }}>
                  {monthName(m)}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {/* Painel: Ajuste de período (calendarzinho com range) */}
      {open === "range" && (
        <View style={styles.panel}>
          <View style={styles.calHeader}>
            <Pressable
              style={styles.pill}
              onPress={() => {
                const next = decMonth(yearBrowse, monthBrowse);
                setYearBrowse(next.y);
                setMonthBrowse(next.m);
              }}
            >
              <Text variant="Body" style={styles.textDim}>
                ‹
              </Text>
            </Pressable>

            <Text variant="Body" style={styles.textMain}>
              {monthName(monthBrowse)} {yearBrowse}
            </Text>

            <Pressable
              style={styles.pill}
              onPress={() => {
                const next = incMonth(yearBrowse, monthBrowse);
                setYearBrowse(next.y);
                setMonthBrowse(next.m);
              }}
            >
              <Text variant="Body" style={styles.textDim}>
                ›
              </Text>
            </Pressable>
          </View>

          {/* Grade de dias */}
          <View style={styles.weekHeader}>
            {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
              <Text key={d} variant="Caption" style={styles.textDim}>
                {d}
              </Text>
            ))}
          </View>

          <View style={styles.grid}>
            {weeks.map((w, wi) => (
              <View key={wi} style={styles.weekRow}>
                {w.map((d, di) => {
                  const otherMonth = d.getMonth() !== monthBrowse;
                  const selected = isInRange(d);
                  return (
                    <Pressable
                      key={di}
                      onPress={() => onPickDay(d)}
                      style={[
                        styles.dayCell,
                        otherMonth && { opacity: 0.35 },
                        selected && styles.daySelected,
                      ]}
                    >
                      <Text
                        variant="Body"
                        style={{ color: selected ? BC.black : BC.white }}
                      >
                        {d.getDate()}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            ))}
          </View>

          {/* Ações */}
          <View style={{ flexDirection: "row", gap: 8, marginTop: 10 }}>
            <Pressable
              style={[
                styles.applyBtn,
                { backgroundColor: "rgba(255,255,255,0.08)" },
              ]}
              onPress={() => {
                setRangeStart(null);
                setRangeEnd(null);
              }}
            >
              <Text variant="Body" style={{ color: BC.white }}>
                Limpar
              </Text>
            </Pressable>
            <Pressable style={styles.applyBtn} onPress={applyRange}>
              <Text
                variant="Body"
                style={{ color: BC.black, fontWeight: "700" }}
              >
                Aplicar período
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

/* ===== Helpers ===== */
function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
function stripTime(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
function incMonth(y: number, m: number) {
  const d = new Date(y, m + 1, 1);
  return { y: d.getFullYear(), m: d.getMonth() };
}
function decMonth(y: number, m: number) {
  const d = new Date(y, m - 1, 1);
  return { y: d.getFullYear(), m: d.getMonth() };
}

function buildMonthMatrix(year: number, month: number) {
  const first = new Date(year, month, 1);
  const start = new Date(first);
  start.setDate(first.getDate() - first.getDay()); // domingo da semana do dia 1
  const weeks: Date[][] = [];
  for (let w = 0; w < 6; w++) {
    const row: Date[] = [];
    for (let d = 0; d < 7; d++) {
      const cur = new Date(start);
      cur.setDate(start.getDate() + w * 7 + d);
      row.push(cur);
    }
    weeks.push(row);
  }
  return weeks;
}

/* ===== Styles ===== */
const styles = StyleSheet.create({
  wrap: { position: "relative" },
  row: { flexDirection: "row", gap: 8 },
  btn: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  btnText: { color: BC.white },

  panel: {
    position: "absolute",
    top: 44,
    left: 0,
    zIndex: 9999,
    elevation: 50,
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    minWidth: 320,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },

  textMain: { color: BC.white, fontWeight: "600" },
  textDim: { color: BC.white, opacity: 0.7 },

  pill: {
    backgroundColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  yearHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  yearGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  yearCell: {
    backgroundColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },

  monthGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  monthCell: {
    backgroundColor: "rgba(255,255,255,0.06)",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },

  calHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  grid: { gap: 6 },
  weekRow: { flexDirection: "row", justifyContent: "space-between", gap: 6 },
  dayCell: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 10,
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },
  daySelected: { backgroundColor: BC.celeste },
  sel: {
    backgroundColor: "rgba(53,225,242,0.25)",
    borderColor: BC.celeste,
    borderWidth: 1,
  },

  applyBtn: {
    backgroundColor: BC.celeste,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
