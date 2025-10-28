// app/(admin)/campaign-preview.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function CampaignPreview() {
  const [channel, setChannel] = useState<"whatsapp" | "sms" | "email">(
    "whatsapp"
  );
  const offer =
    "Volta ao estilo: –15% no corte clássico até domingo. Reserva em 2 toques.";

  const Chan = ({
    v,
    label,
  }: {
    v: "whatsapp" | "sms" | "email";
    label: string;
  }) => (
    <Pressable
      onPress={() => setChannel(v)}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: channel === v ? BC.celeste : BC.gray700,
        marginRight: 8,
      }}
    >
      <Text
        variant="Body"
        style={{ color: channel === v ? BC.celeste : BC.gray300 }}
      >
        {label}
      </Text>
    </Pressable>
  );

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Nova campanha — Passo 2
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Revê a mensagem por canal.
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Chan v="whatsapp" label="WhatsApp" />
        <Chan v="sms" label="SMS" />
        <Chan v="email" label="E-mail" />
      </View>

      <View
        style={{
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 16,
          gap: 8,
        }}
      >
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Preview ({channel.toUpperCase()})
        </Text>
        <Text variant="Body" style={{ color: BC.white }}>
          {offer}{" "}
          {channel !== "email"
            ? "👉 Link curto: bc.app/r/123"
            : "\n\nBarbers Control • Centro • Cancelar inscrição no rodapé"}
        </Text>
      </View>

      <BCButton
        title="Enviar (mock)"
        onPress={() => router.push("/(admin)/campaign-stats" as any)}
      />
      <BCButton
        title="Voltar"
        variant="secondary"
        onPress={() => router.back()}
      />
    </View>
  );
}
