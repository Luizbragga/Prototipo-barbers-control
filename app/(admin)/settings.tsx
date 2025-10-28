// app/(admin)/settings.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { View } from "react-native";

export default function AdminSettings() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Configurações
      </Text>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          gap: 8,
        }}
      >
        <Text variant="H3" style={{ color: BC.white }}>
          Serviços
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Corte, Barba, Combo… duração e preço.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          gap: 8,
        }}
      >
        <Text variant="H3" style={{ color: BC.white }}>
          Horários & Equipe
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Expediente, folgas, comissões.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: BC.ink,
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          gap: 8,
        }}
      >
        <Text variant="H3" style={{ color: BC.white }}>
          Integrações
        </Text>
        <Text variant="Caption" style={{ color: BC.gray500 }}>
          Pagamentos, WhatsApp, notificações.
        </Text>
      </View>
    </View>
  );
}
