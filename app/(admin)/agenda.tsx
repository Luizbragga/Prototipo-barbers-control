// app/(admin)/agenda.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { WeekGrid } from "@/components/WeekGrid";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

type ItemStatus = "confirmado" | "reservado" | "no-show";
type GridItem = {
  day: string;
  time: string;
  text: string;
  status: ItemStatus;
  barber: string;
};

export default function AdminAgenda() {
  const router = useRouter();
  const { barber } = useLocalSearchParams<{ barber?: string }>();

  // “Sua” agenda = seu nome
  const myBarberName = "Henrique";
  const barbers = ["Henrique", "Carlos", "Gustavo"];

  const [selectedBarber, setSelectedBarber] = useState<string>(
    (barber as string) || myBarberName
  );

  const pickBarber = (name: string) => {
    setSelectedBarber(name);
    router.replace({ pathname: "/(admin)/agenda", params: { barber: name } });
  };

  // cabeçalho da grade
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex"];
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

  // mocks — agora com campo "barber" para filtrar
  const itemsAll: GridItem[] = [
    {
      day: "Seg",
      time: "09:00",
      text: "João • Corte (Rafa)",
      status: "confirmado",
      barber: "Henrique",
    },
    {
      day: "Ter",
      time: "10:00",
      text: "Miguel • Barba (Ana)",
      status: "reservado",
      barber: "Carlos",
    },
    {
      day: "Qua",
      time: "11:00",
      text: "Pedro • Combo (Gio)",
      status: "no-show",
      barber: "Gustavo",
    },
    {
      day: "Qui",
      time: "13:00",
      text: "Léo • Corte (Rafa)",
      status: "confirmado",
      barber: "Henrique",
    },
    {
      day: "Sex",
      time: "14:00",
      text: "Caio • Corte+Barba",
      status: "reservado",
      barber: "Carlos",
    },
  ];

  const filteredItems = useMemo(
    () => itemsAll.filter((i) => i.barber === selectedBarber),
    [itemsAll, selectedBarber]
  );

  // intervalo da semana (seg–dom) apenas para exibição
  const today = new Date();
  const startOfWeek = useMemo(() => {
    const d = new Date(today);
    const day = d.getDay(); // 0=dom … 6=sáb
    const delta = (day + 6) % 7; // seg=0
    d.setDate(d.getDate() - delta);
    d.setHours(0, 0, 0, 0);
    return d;
  }, [today]);

  const endOfWeek = useMemo(() => {
    const d = new Date(startOfWeek);
    d.setDate(d.getDate() + 6);
    d.setHours(23, 59, 59, 999);
    return d;
  }, [startOfWeek]);

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 16, gap: 12 }}>
      {/* Header */}
      <View style={{ gap: 8, marginBottom: 4 }}>
        <Text variant="H1" style={{ color: BC.white }}>
          Agenda — semana
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          {selectedBarber}: {startOfWeek.toLocaleDateString()} –{" "}
          {endOfWeek.toLocaleDateString()}
        </Text>

        <View style={styles.barberRow}>
          {/* “Sua” */}
          <Pressable
            onPress={() => pickBarber(myBarberName)}
            style={[
              styles.barberBtn,
              selectedBarber === myBarberName && styles.barberBtnActive,
            ]}
          >
            <Text
              variant="Body"
              style={{
                color: selectedBarber === myBarberName ? BC.black : BC.white,
              }}
            >
              Sua
            </Text>
          </Pressable>

          {/* Nomes */}
          {barbers.map((name) => (
            <Pressable
              key={name}
              onPress={() => pickBarber(name)}
              style={[
                styles.barberBtn,
                selectedBarber === name && styles.barberBtnActive,
              ]}
            >
              <Text
                variant="Body"
                style={{ color: selectedBarber === name ? BC.black : BC.white }}
              >
                {name}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Grade semanal (usa itens já filtrados) */}
      <WeekGrid days={days} times={times} items={filteredItems as any} />

      <Text variant="Caption" style={{ color: BC.gray500, marginTop: 8 }}>
        Nota: validação por recurso — dois agendamentos no mesmo horário são
        permitidos se forem barbeiros diferentes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barberRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 6,
  },
  barberBtn: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  barberBtnActive: {
    backgroundColor: BC.celeste,
    borderColor: BC.celeste,
  },
});
