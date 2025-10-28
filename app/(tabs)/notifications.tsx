// app/(tabs)/notifications.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function ClientNotifications() {
  const items = [
    {
      t: "Confirmação",
      msg: "Corte confirmado para terça, 18:00 com Rafa. Chega 5 min antes 😉",
      at: "Hoje • 10:12",
    },
    {
      t: "Lembrete 24h",
      msg: "É amanhã! Teu corte às 18:00 com Rafa.",
      at: "Ontem • 18:00",
    },
    {
      t: "Campanha",
      msg: "Volta ao estilo: –15% no corte clássico até domingo. Reserva em 2 toques.",
      at: "Dom • 09:30",
    },
  ];

  const empty = false; // mude para true para ver o estado vazio

  if (empty) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: BC.black,
          padding: 24,
          gap: 12,
          justifyContent: "center",
        }}
      >
        <Text variant="H1" style={{ color: BC.white }}>
          Notificações
        </Text>
        <Text variant="Body" style={{ color: BC.gray300 }}>
          Ainda não tens notificações.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Notificações
      </Text>
      {items.map((n) => (
        <View
          key={n.at + n.t}
          style={{
            backgroundColor: BC.ink,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
            padding: 14,
            gap: 6,
          }}
        >
          <Text variant="H3" style={{ color: BC.white }}>
            {n.t}
          </Text>
          <Text variant="Body" style={{ color: BC.gray300 }}>
            {n.msg}
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            {n.at}
          </Text>
        </View>
      ))}
    </View>
  );
}
