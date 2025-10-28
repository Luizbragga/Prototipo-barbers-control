// app/(tabs)/two.tsx
import { BC } from "@/app/theme";
import { BCSkeleton } from "@/components/BCSkeleton";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function MeusAgendamentos() {
  const [tab, setTab] = useState<"proximos" | "passados">("proximos");
  const loading = false; // mude para true para ver o skeleton

  const proximos = [
    {
      when: "Hoje • 11:00",
      desc: "Corte clássico (30m) • Rafa • Unidade Centro",
      status: "Confirmado",
    },
  ];
  const passados = [
    {
      when: "Seg • 18:00",
      desc: "Barba premium (30m) • Ana • Unidade Norte",
      status: "Concluído",
    },
  ];

  const data = tab === "proximos" ? proximos : passados;
  const empty = data.length === 0;

  if (loading) return <BCSkeleton rows={3} />;

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Meus agendamentos
      </Text>

      {/* Filtro Próximos / Passados */}
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Pressable
          onPress={() => setTab("proximos")}
          accessibilityLabel="Ver próximos agendamentos"
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: tab === "proximos" ? BC.celeste : BC.gray700,
            backgroundColor: tab === "proximos" ? BC.ink : "transparent",
          }}
        >
          <Text
            variant="Body"
            style={{ color: tab === "proximos" ? BC.celeste : BC.gray300 }}
          >
            Próximos
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setTab("passados")}
          accessibilityLabel="Ver agendamentos passados"
          style={{
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: tab === "passados" ? BC.celeste : BC.gray700,
            backgroundColor: tab === "passados" ? BC.ink : "transparent",
          }}
        >
          <Text
            variant="Body"
            style={{ color: tab === "passados" ? BC.celeste : BC.gray300 }}
          >
            Passados
          </Text>
        </Pressable>
      </View>

      {empty ? (
        <View
          style={{
            backgroundColor: BC.ink,
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
            gap: 6,
          }}
        >
          <Text variant="Body" style={{ color: BC.gray300 }}>
            {tab === "proximos"
              ? "Não há agendamentos próximos."
              : "Não há agendamentos passados."}
          </Text>
          {tab === "proximos" && (
            <Link href="/(tabs)" asChild>
              <Pressable
                style={{
                  marginTop: 8,
                  backgroundColor: BC.celeste,
                  padding: 12,
                  borderRadius: 12,
                }}
              >
                <Text
                  variant="H3"
                  style={{ color: BC.black, textAlign: "center" }}
                >
                  Agendar agora
                </Text>
              </Pressable>
            </Link>
          )}
        </View>
      ) : (
        data.map((item) => (
          <View
            key={item.when + item.desc}
            style={{
              backgroundColor: BC.ink,
              padding: 16,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: BC.gray700,
              gap: 6,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="H3" style={{ color: BC.white }}>
                {item.when}
              </Text>
              <View
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  borderRadius: 999,
                  borderWidth: 1,
                  borderColor:
                    item.status === "Confirmado" ? BC.celeste : BC.gray700,
                }}
              >
                <Text
                  variant="Caption"
                  style={{
                    color:
                      item.status === "Confirmado" ? BC.celeste : BC.gray300,
                  }}
                >
                  {item.status}
                </Text>
              </View>
            </View>

            <Text variant="Body" style={{ color: BC.gray300 }}>
              {item.desc}
            </Text>

            {tab === "proximos" ? (
              <View style={{ flexDirection: "row", gap: 10, marginTop: 8 }}>
                <Link href="/(tabs)/reschedule" asChild>
                  <Pressable
                    style={{
                      backgroundColor: BC.celeste,
                      padding: 10,
                      borderRadius: 12,
                      minWidth: 120,
                    }}
                  >
                    <Text
                      variant="H3"
                      style={{ color: BC.black, textAlign: "center" }}
                    >
                      Reagendar
                    </Text>
                  </Pressable>
                </Link>

                <Link href="/(tabs)/cancel" asChild>
                  <Pressable
                    style={{
                      borderWidth: 1,
                      borderColor: BC.error,
                      padding: 10,
                      borderRadius: 12,
                      minWidth: 120,
                    }}
                  >
                    <Text
                      variant="H3"
                      style={{ color: BC.error, textAlign: "center" }}
                    >
                      Cancelar
                    </Text>
                  </Pressable>
                </Link>
              </View>
            ) : null}
          </View>
        ))
      )}
    </View>
  );
}
