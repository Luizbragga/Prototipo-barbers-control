// app/(admin)/notifications.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function Notifications() {
  const templates = [
    {
      t: "Confirmação",
      msg: "Corte confirmado para terça, 18:00 com Rafa. Chega 5 min antes 😉",
    },
    {
      t: "Lembrete 24h",
      msg: "É amanhã! Teu corte às 18:00 com Rafa. Qualquer mudança, avisa aqui.",
    },
    { t: "Lembrete 2h", msg: "Faltam 2h: 18:00 com Rafa. Até já!" },
    {
      t: "Reagendamento",
      msg: "Agendamento alterado para quarta, 19:00. Tudo certo por aí?",
    },
    {
      t: "Cancelamento",
      msg: "Teu horário foi cancelado. Precisas remarcar? Responde a esta mensagem.",
    },
    {
      t: "No-show",
      msg: "Notamos que não compareceste. Pode haver taxa conforme política. Quer reagendar?",
    },
    {
      t: "Campanha",
      msg: "Volta ao estilo: –15% no corte clássico até domingo. Reserva em 2 toques.",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Notificações — Templates
      </Text>
      {templates.map((it) => (
        <View
          key={it.t}
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
            {it.t}
          </Text>
          <Text variant="Body" style={{ color: BC.gray300 }}>
            {it.msg}
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            Canais: Push • WhatsApp • SMS • E-mail
          </Text>
        </View>
      ))}
    </View>
  );
}
