// app/(admin)/index.tsx
import { BC } from "@/app/theme";
import { BCKPI } from "@/components/BCKPI";
import { DayPicker } from "@/components/DayPicker";
import { HoursList } from "@/components/HoursList";
import { MenuButton } from "@/components/MenuButton";
import { NoShowCard } from "@/components/NoShowCard";
import type { NowBooking } from "@/components/NowCard";
import { NowCard } from "@/components/NowCard";
import { PeriodFilter } from "@/components/PeriodFilter";
import { RevenueCard } from "@/components/RevenueCard";
import { Text } from "@/components/Themed";
import { VisibilityToggle } from "@/components/VisibilityToggle";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

export default function AdminHome() {
  const router = useRouter();

  // FILTROS (botão único + resumo)
  const [showFilters, setShowFilters] = useState(false);
  type FilterState = {
    type: "none" | "year" | "month" | "period";
    value?: string;
  };
  const [filter, setFilter] = useState<FilterState>({ type: "none" });
  const filterText = useMemo(() => {
    switch (filter.type) {
      case "none":
        return "Filtros (nenhum aplicado)";
      case "year":
        return `Filtros (ano: ${filter.value})`;
      case "month":
        return `Filtros (mês: ${filter.value})`;
      case "period":
        return `Filtros (${filter.value})`;
    }
  }, [filter]);
  const [unread, setUnread] = useState<number>(3); // mock; depois liga à tua store/api

  // dropdown “Agenda dos barbeiros”
  const [barbersOpen, setBarbersOpen] = useState(false);
  const barbers = ["Henrique", "Carlos", "Gustavo"];

  const formatLongDate = (d: Date) =>
    new Intl.DateTimeFormat("pt-PT", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
      .format(d)
      .replace(/^./, (c) => c.toUpperCase());

  const userName = "Henrique"; // mock usuario
  const [hideValues, setHideValues] = useState(false);

  const myBarberName = "Henrique";
  const [selectedBarberName] = useState(myBarberName);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekRange, setWeekRange] = useState<{ start: Date; end: Date } | null>(
    null
  );

  // KPIs mock
  const ocupacaoHoje = "60%";
  const deltaOcup = "+8% vs ontem";
  const faturamentoPrevisto = "R$ 1.280";
  const faturamentoAtual = "R$ 840";
  const deltaFat = "+12% vs ontem";
  const noShowSemana = 3;

  // Agenda “Agora/Próximos” mock
  const allNow: NowBooking[] = [
    {
      client: "Carlos Mendes",
      service: "Corte + Barba",
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        11,
        3
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        11,
        33
      ).toISOString(),
      barber: "Henrique",
      status: "in_service",
    },
  ];
  const allNext: NowBooking[] = [
    {
      client: "Luís Braga",
      service: "Corte",
      start: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        11,
        46
      ).toISOString(),
      end: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        12,
        16
      ).toISOString(),
      barber: "Henrique",
    },
  ];

  const nowForBarber = useMemo(
    () => allNow.find((b) => b.barber === myBarberName),
    [allNow, myBarberName]
  );
  const nextForBarber = useMemo(
    () => allNext.filter((b) => b.barber === myBarberName),
    [allNext, myBarberName]
  );
  const showActions =
    nowForBarber?.barber === myBarberName &&
    nowForBarber?.status === "scheduled";

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* topo */}
      <View style={styles.topbar}>
        <Text variant="H1" style={{ color: BC.white }}>
          Olá, {userName}! 👋
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <VisibilityToggle
            hidden={hideValues}
            onToggle={() => setHideValues((v) => !v)}
            iconOnly
          />

          {/* Sino de notificações */}
          <Pressable
            onPress={() => router.push("/(admin)/notifications")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              backgroundColor: BC.ink,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: BC.gray700,
              position: "relative",
            }}
            accessibilityRole="button"
            accessibilityLabel="Notificações"
          >
            <Ionicons
              name={unread > 0 ? "notifications" : "notifications-outline"}
              size={20}
              color="#fff"
            />

            {unread > 0 && (
              <View
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  minWidth: 18,
                  height: 18,
                  paddingHorizontal: 4,
                  borderRadius: 9,
                  backgroundColor: "#EF4444", // vermelho
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 2,
                  borderColor: BC.black,
                }}
              >
                <Text variant="Caption" style={{ color: "#fff" }}>
                  {unread > 99 ? "99+" : String(unread)}
                </Text>
              </View>
            )}
          </Pressable>

          <MenuButton />
        </View>
      </View>

      <Text
        variant="Body"
        style={{ color: BC.gray300, marginTop: -6, marginBottom: 8 }}
      >
        Bem-vindo ao Barber Control. Selecione o dia para ver o resumo.
      </Text>
      <Text
        variant="Body"
        style={{ color: BC.gray300, marginTop: 2, marginBottom: 10 }}
      >
        {formatLongDate(selectedDate)}
      </Text>

      {/* filtros e atalhos do topo */}
      <View style={[styles.filterWrap, { marginTop: 8, marginBottom: 8 }]}>
        <Pressable
          style={styles.filterToggle}
          onPress={() => setShowFilters((v) => !v)}
        >
          <Text variant="Body" style={{ color: BC.white }}>
            {filterText} ▾
          </Text>
        </Pressable>

        {showFilters && (
          <PeriodFilter
            anchorDate={selectedDate}
            onPickYear={(y) => {
              const m = selectedDate.getMonth();
              const max = new Date(y, m + 1, 0).getDate();
              const day = Math.min(selectedDate.getDate(), max);
              setSelectedDate(new Date(y, m, day));
              setWeekRange(null);
              setFilter({ type: "year", value: String(y) });
            }}
            onPickMonth={(y, m) => {
              const max = new Date(y, m + 1, 0).getDate();
              const day = Math.min(selectedDate.getDate(), max);
              setSelectedDate(new Date(y, m, day));
              setWeekRange(null);
              const mm = String(m + 1).padStart(2, "0");
              setFilter({ type: "month", value: `${mm}/${y}` });
            }}
            onPickRange={(start, end) => {
              setSelectedDate(start);
              setWeekRange({ start, end });
              const a = start.toLocaleDateString();
              const b = end.toLocaleDateString();
              setFilter({ type: "period", value: `${a} – ${b}` });
            }}
            onOpenAnalytics={() => router.push("/(admin)/analytics")}
          />
        )}

        <View style={styles.actionsRight}>
          <Pressable
            onPress={() => router.push("/(admin)/campaigns")}
            style={styles.smallBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Analisar campanhas
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/(admin)/plans-analytics")}
            style={styles.smallBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Analisar planos
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/(admin)/cash-open")}
            style={styles.openCashBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Abrir caixa
            </Text>
          </Pressable>

          <Pressable
            onPress={() =>
              router.push({
                pathname: "/(admin)/agenda",
                params: { barber: myBarberName },
              })
            }
            style={styles.smallBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Agenda da semana
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(admin)/loyalty")}
            style={styles.smallBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Fidelidade
            </Text>
          </Pressable>
        </View>

        {weekRange && (
          <View
            style={{
              backgroundColor: BC.ink,
              borderColor: BC.gray700,
              borderWidth: 1,
              borderRadius: 12,
              padding: 10,
              marginTop: 10,
            }}
          >
            <Text variant="Body" style={{ color: BC.white }}>
              Analisando período: {weekRange.start.toLocaleDateString()} –{" "}
              {weekRange.end.toLocaleDateString()}
            </Text>
          </View>
        )}
      </View>

      {/* dropdown Agenda dos barbeiros */}
      <View style={styles.controlsRow}>
        <View style={{ position: "relative" }}>
          <Pressable
            style={styles.btnOutline}
            onPress={() => setBarbersOpen((v) => !v)}
          >
            <Text variant="Body" style={{ color: BC.white }}>
              Agenda dos barbeiros ▾
            </Text>
          </Pressable>

          {barbersOpen && (
            <View style={styles.popover}>
              {barbers.map((name) => (
                <Pressable
                  key={name}
                  style={styles.popItem}
                  onPress={() => {
                    setBarbersOpen(false);
                    router.push({
                      pathname: "/(admin)/barbers-agenda",
                      params: { barber: name },
                    });
                  }}
                >
                  <Text variant="Body" style={{ color: BC.white }}>
                    {name}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </View>

      {/* Dias */}
      <DayPicker date={selectedDate} onChange={setSelectedDate} />

      {/* KPIs */}
      <View style={styles.kpis}>
        <BCKPI label="Ocupação hoje" value={ocupacaoHoje} delta={deltaOcup} />
        <RevenueCard
          hidden={hideValues}
          predicted={faturamentoPrevisto}
          actual={faturamentoAtual}
          delta={deltaFat}
        />
        <NoShowCard count={noShowSemana} />
      </View>

      {/* Agora */}
      <NowCard
        booking={nowForBarber}
        next={nextForBarber}
        showActions={showActions}
        agendaBarber={myBarberName}
      />

      {/* Horários */}
      <HoursList date={selectedDate} barber={myBarberName} />

      {/* Atalhos (embaixo) */}
      <View style={styles.shortcut}>
        <Text variant="H2" style={{ color: BC.white }}>
          Atalhos
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Abrir caixa • Ver agenda • Criar campanha
        </Text>

        <View style={styles.planRow}>
          <Pressable
            onPress={() => router.push("/(admin)/campaigns")}
            style={styles.planBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Analisar campanhas
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(admin)/plans-analytics")}
            style={styles.planBtn}
          >
            <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
              Analisar planos
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: BC.black, padding: 16, gap: 16 },
  container: { padding: 16, gap: 16, paddingBottom: 160, overflow: "visible" },

  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  filterWrap: { position: "relative", zIndex: 9999 },

  kpis: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    position: "relative",
    zIndex: 0,
  },

  shortcut: {
    backgroundColor: BC.ink,
    borderWidth: 1,
    borderColor: BC.gray700,
    borderRadius: 16,
    padding: 16,
    gap: 10,
  },

  controlsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    zIndex: 5,
  },

  btnOutline: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  popover: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 6,
    minWidth: 200,
    marginTop: 6,
    zIndex: 9999,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },

  popItem: { paddingVertical: 10, paddingHorizontal: 12 },

  planRow: { flexDirection: "row", gap: 10, flexWrap: "wrap", marginTop: 8 },
  planBtn: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: BC.celeste,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },

  actionsRight: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 8,
    zIndex: 1,
  },

  smallBtn: {
    backgroundColor: BC.celeste,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  filterToggle: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  openCashBtn: {
    backgroundColor: BC.success,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
});
