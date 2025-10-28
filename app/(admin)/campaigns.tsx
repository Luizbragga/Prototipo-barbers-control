// app/(admin)/campaigns.tsx
import { BC } from "@/app/theme";
import { BCError } from "@/components/BCError";
import { Text } from "@/components/Themed";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function Campaigns() {
  // mocks de estado
  const [error, setError] = useState(false); // troque para true para ver o erro
  const [empty, setEmpty] = useState(true); // se false, você mostraria a lista

  if (error) {
    return (
      <BCError
        onRetry={() => setError(false)}
        message="Falha ao carregar campanhas."
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Campanhas
      </Text>

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
            Ainda não há campanhas.
          </Text>
          <Text variant="Caption" style={{ color: BC.gray500 }}>
            Crie uma oferta por WhatsApp/SMS/e-mail e acompanhe cliques, agendas
            e ROI.
          </Text>
          <Pressable
            onPress={() => setError(true)} // clique para simular erro (teste)
            style={{
              marginTop: 8,
              backgroundColor: BC.celeste,
              padding: 12,
              borderRadius: 12,
            }}
          >
            <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
              Criar campanha
            </Text>
          </Pressable>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}
