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
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

const router = useRouter();

const formatLongDate = (d: Date) =>
  new Intl.DateTimeFormat("pt-PT", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(d)
    .replace(/^./, (c) => c.toUpperCase());

const [barbersOpen, setBarbersOpen] = useState(false);
const barbers = ["Henrique", "Carlos", "Gustavo"]; //

export default function AdminHome() {
  // usuário logado (mock)
  const userName = "Henrique";

  // visibilidade de valores
  const [hideValues, setHideValues] = useState(false);

  // filtro de barbeiro (padrão: o próprio admin-barbeiro)
  const myBarberName = "Henrique";
  const [selectedBarberName, setSelectedBarberName] = useState(myBarberName);

  // dia (dashboard diário)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekRange, setWeekRange] = useState<{ start: Date; end: Date } | null>(
    null
  );
  // KPIs mock (ocupação mantém BCKPI que já ficou bom)
  const ocupacaoHoje = "60%";
  const deltaOcup = "+8% vs ontem";

  // Faturamento previsto (soma dos agendamentos do admin no dia) e atual (mock caixa do admin no dia)
  const faturamentoPrevisto = "R$ 1.280";
  const faturamentoAtual = "R$ 840";
  const deltaFat = "+12% vs ontem";

  // Não compareceu (semana)
  const noShowSemana = 3;

  // Agenda mock (para o dia selecionado)
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

  // filtro: “Agora” e “Próximos” SOMENTE do barbeiro selecionado
  const nowForBarber = useMemo(
    () => allNow.find((b) => b.barber === selectedBarberName),
    [allNow, selectedBarberName]
  );
  const nextForBarber = useMemo(
    () => allNext.filter((b) => b.barber === selectedBarberName),
    [allNext, selectedBarberName]
  );

  // regra: só mostra ações se o booking atual é do admin e está marcado como “scheduled”
  const showActions =
    selectedBarberName === myBarberName &&
    nowForBarber?.barber === myBarberName &&
    nowForBarber?.status === "scheduled";

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container} // garante espaço pro conteúdo
      keyboardShouldPersistTaps="handled"
    >
      {/* topo: saudação + menu + olhinho */}
      <View style={styles.topbar}>
        <Text variant="H1" style={{ color: BC.white }}>
          Olá, {userName}! 👋
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <VisibilityToggle
            hidden={hideValues}
            onToggle={() => setHideValues((v) => !v)}
          />
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

      <View style={[styles.filterWrap, { marginTop: 8, marginBottom: 8 }]}>
        <PeriodFilter
          anchorDate={selectedDate}
          onPickYear={(y) => {
            const m = selectedDate.getMonth();
            const max = new Date(y, m + 1, 0).getDate();
            const day = Math.min(selectedDate.getDate(), max);
            setSelectedDate(new Date(y, m, day));
            setWeekRange(null);
          }}
          onPickMonth={(y, m) => {
            const max = new Date(y, m + 1, 0).getDate();
            const day = Math.min(selectedDate.getDate(), max);
            setSelectedDate(new Date(y, m, day));
            setWeekRange(null);
          }}
          onPickRange={(start, end) => {
            // analisa período livre
            setSelectedDate(start);
            setWeekRange({ start, end });
          }}
          onOpenAnalytics={() => router.push("/(admin)/analytics")}
        />

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
      <View style={styles.controlsRow}>
        {/* seu PeriodFilter já está aqui acima */}
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
                    // Por ora só navegamos para uma rota futura (mock).
                    // Quando quiser, criamos a tela / (admin) / barbers-agenda
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

      {/* seletor de dia (estilo inbarber) */}
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

      {/* Agora (apenas do barbeiro logado por padrão) */}
      <NowCard
        booking={nowForBarber}
        next={nextForBarber}
        showActions={showActions}
        agendaBarber={selectedBarberName}
      />

      {/* Horários clicáveis (para agendar rápido) */}
      <HoursList date={selectedDate} barber={selectedBarberName} />

      {/* Atalhos + botão “Análise de planos e campanhas” */}
      <View style={styles.shortcut}>
        <Text variant="H2" style={{ color: BC.white }}>
          Atalhos
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Abrir caixa • Ver agenda • Criar campanha
        </Text>

        <Pressable
          onPress={() => {
            /* rota mock; ajuste se já existir */
          }}
          style={styles.planBtn}
        >
          <Text variant="Body" style={{ color: BC.black, fontWeight: "700" }}>
            Análise dos seus planos e campanhas
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: BC.black, padding: 16, gap: 16 },
  // 🔥 evita o recorte do dropdown dentro do ScrollView
  container: { padding: 16, gap: 16, paddingBottom: 160, overflow: "visible" },

  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 🔥 filtro sempre no topo da pilha
  filterWrap: { position: "relative", zIndex: 9999 },

  // 🔻 blocos abaixo não sobrepõem o filtro
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
  planBtn: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: BC.celeste,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
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

  popItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
