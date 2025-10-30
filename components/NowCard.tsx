// components/NowCard.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export type NowBooking = {
  client: string;
  service: string;
  start: string; // ISO
  end: string; // ISO
  barber?: string;
  status?: "scheduled" | "in_service" | "done" | "no_show";
};

export const NowCard = ({
  booking,
  next = [],
  showActions = true,
  agendaBarber,
}: {
  booking?: NowBooking;
  next?: NowBooking[];
  showActions?: boolean;
  agendaBarber?: string;
}) => {
  const fmt = (iso?: string) =>
    iso
      ? new Date(iso).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : "--:--";
  const statusTxt =
    booking?.status === "in_service"
      ? "Em atendimento"
      : booking?.status === "done"
      ? "Concluído"
      : booking?.status === "no_show"
      ? "No-show"
      : "Agendado";

  return (
    <View style={styles.card}>
      <Text variant="H2" style={styles.title}>
        Agora
      </Text>

      {!booking ? (
        <View style={{ paddingVertical: 8 }}>
          <Text variant="Body" style={{ color: BC.gray300 }}>
            Sem agendamento para este barbeiro neste momento.
          </Text>
          <View style={{ height: 12 }} />
          <Pressable
            onPress={() =>
              router.push({
                pathname: "/(admin)/agenda",
                params: agendaBarber ? { barber: agendaBarber } : undefined,
              } as any)
            }
            style={[styles.btn, { backgroundColor: BC.celeste }]}
          >
            <Text variant="H3" style={{ color: BC.black, fontWeight: "700" }}>
              Ver agenda
            </Text>
          </Pressable>
        </View>
      ) : (
        <>
          <View style={styles.row}>
            <Text variant="Caption" style={styles.muted}>
              Cliente
            </Text>
            <Text variant="Body" style={styles.value}>
              {booking.client}
            </Text>
          </View>

          <View style={styles.row}>
            <Text variant="Caption" style={styles.muted}>
              Serviço
            </Text>
            <Text variant="Body" style={styles.value}>
              {booking.service}
            </Text>
          </View>

          <View style={styles.row}>
            <Text variant="Caption" style={styles.muted}>
              Horário
            </Text>
            <Text variant="Body" style={styles.value}>
              {fmt(booking.start)} – {fmt(booking.end)}
            </Text>
          </View>

          <View style={styles.badgeLine}>
            <View style={[styles.badge, { backgroundColor: BC.gray700 }]}>
              <Text variant="Caption" style={{ color: BC.white }}>
                {statusTxt}
              </Text>
            </View>
            {!!booking.barber && (
              <View style={[styles.badge, { backgroundColor: BC.celeste }]}>
                <Text variant="Caption" style={{ color: BC.black }}>
                  {booking.barber}
                </Text>
              </View>
            )}
          </View>

          {showActions && booking?.status === "scheduled" && (
            <View style={styles.actions}>
              <Pressable
                onPress={() => router.replace("/(barber)/today" as any)}
                style={[styles.btn, { backgroundColor: BC.success }]}
              >
                <Text
                  variant="H3"
                  style={{ color: BC.black, fontWeight: "700" }}
                >
                  Atender
                </Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  router.push({
                    pathname: "/(admin)/agenda",
                    params: agendaBarber ? { barber: agendaBarber } : undefined,
                  } as any)
                }
                style={[
                  styles.btn,
                  {
                    backgroundColor: "transparent",
                    borderColor: BC.celeste,
                    borderWidth: 1,
                  },
                ]}
              >
                <Text
                  variant="H3"
                  style={{ color: BC.celeste, fontWeight: "700" }}
                >
                  Ver agenda
                </Text>
              </Pressable>
            </View>
          )}
        </>
      )}

      {!!next?.length && (
        <View style={{ marginTop: 12 }}>
          <Text variant="Caption" style={styles.muted}>
            Próximos
          </Text>
          <View style={{ height: 6 }} />
          {next.slice(0, 2).map((n, i) => (
            <View key={i} style={styles.nextRow}>
              <Text variant="Body" style={{ color: BC.white }}>
                {fmt(n.start)} — {n.client}
              </Text>
              <Text variant="Caption" style={{ color: BC.gray300 }}>
                {n.service}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  title: { color: BC.white },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  muted: { color: BC.gray500 },
  value: { color: BC.white },
  badgeLine: { flexDirection: "row", gap: 8, marginTop: 6 },
  badge: { borderRadius: 999, paddingHorizontal: 10, paddingVertical: 4 },
  actions: { gap: 8, marginTop: 12 },
  btn: { borderRadius: 12, paddingVertical: 12, alignItems: "center" },
  nextRow: {
    backgroundColor: "rgba(255,255,255,0.03)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
  },
});
