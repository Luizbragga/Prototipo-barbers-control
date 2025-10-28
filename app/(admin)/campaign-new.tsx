// app/(admin)/campaign-new.tsx
import { BC } from "@/app/theme";
import { BCButton } from "@/components/BCButton";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";

export default function CampaignNew() {
  const [segment, setSegment] = useState<"inativos60" | "todos" | "vip">(
    "inativos60"
  );
  const [channel, setChannel] = useState<"whatsapp" | "sms" | "email">(
    "whatsapp"
  );
  const [offer, setOffer] = useState(
    "Volta ao estilo: –15% no corte clássico até domingo."
  );

  const SegBtn = ({ v, label }: any) => (
    <Pressable
      onPress={() => setSegment(v)}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: segment === v ? BC.celeste : BC.gray700,
      }}
    >
      <Text
        variant="Body"
        style={{ color: segment === v ? BC.celeste : BC.gray300 }}
      >
        {label}
      </Text>
    </Pressable>
  );

  const ChanBtn = ({ v, label }: any) => (
    <Pressable
      onPress={() => setChannel(v)}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: channel === v ? BC.celeste : BC.gray700,
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
        Nova campanha — Passo 1
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Escolhe o segmento e o canal.
      </Text>

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Segmento
      </Text>
      <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
        <SegBtn v="inativos60" label="Inativos 60d" />
        <SegBtn v="todos" label="Todos os clientes" />
        <SegBtn v="vip" label="VIP / Alta frequência" />
      </View>

      <Text variant="Caption" style={{ color: BC.gray500, marginTop: 8 }}>
        Canal
      </Text>
      <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
        <ChanBtn v="whatsapp" label="WhatsApp" />
        <ChanBtn v="sms" label="SMS" />
        <ChanBtn v="email" label="E-mail" />
      </View>

      <Text variant="Caption" style={{ color: BC.gray500, marginTop: 8 }}>
        Oferta / mensagem
      </Text>
      <TextInput
        multiline
        value={offer}
        onChangeText={setOffer}
        placeholder="Escreve a oferta..."
        placeholderTextColor={BC.gray500}
        style={{
          color: BC.white,
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
          minHeight: 96,
        }}
      />

      <View style={{ marginTop: 8, gap: 8 }}>
        <BCButton
          title="Continuar (Passo 2: preview)"
          onPress={() => router.push("/(admin)/campaign-preview" as any)}
        />
        <BCButton
          title="Cancelar"
          variant="secondary"
          onPress={() => router.back()}
        />
      </View>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 12,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
        }}
      >
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Estimativa (mock): alcance 126 clientes • canal{" "}
          {channel.toUpperCase()} • segmento{" "}
          {segment === "inativos60"
            ? "Inativos 60d"
            : segment === "todos"
            ? "Todos"
            : "VIP"}
          .
        </Text>
      </View>
    </View>
  );
}
