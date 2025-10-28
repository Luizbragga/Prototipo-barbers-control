// app/(admin)/cash-move.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, TextInput, View } from "react-native";

export default function CashMove() {
  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 12 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Registrar movimento
      </Text>
      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Tipo
      </Text>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Pressable
          style={{
            padding: 10,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.celeste,
          }}
        >
          <Text variant="Body" style={{ color: BC.celeste }}>
            Entrada
          </Text>
        </Pressable>
        <Pressable
          style={{
            padding: 10,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: BC.gray700,
          }}
        >
          <Text variant="Body" style={{ color: BC.gray300 }}>
            Saída
          </Text>
        </Pressable>
      </View>

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Valor
      </Text>
      <TextInput
        placeholder="ex.: 120,00"
        placeholderTextColor={BC.gray500}
        keyboardType="numeric"
        style={{
          color: BC.white,
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
        }}
      />

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Método
      </Text>
      <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap" }}>
        {["Dinheiro", "Cartão", "Pix"].map((m) => (
          <Pressable
            key={m}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: BC.gray700,
            }}
          >
            <Text variant="Body" style={{ color: BC.gray300 }}>
              {m}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text variant="Caption" style={{ color: BC.gray500 }}>
        Descrição
      </Text>
      <TextInput
        placeholder="ex.: Venda Corte clássico / Água-Café"
        placeholderTextColor={BC.gray500}
        style={{
          color: BC.white,
          backgroundColor: BC.ink,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: BC.gray700,
          padding: 12,
        }}
      />

      <Link href="/(admin)/cash-session" asChild>
        <Pressable
          style={{
            marginTop: 8,
            backgroundColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Salvar
          </Text>
        </Pressable>
      </Link>

      <Link href="/(admin)/cash-session" asChild>
        <Pressable
          style={{
            borderWidth: 1,
            borderColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.celeste, textAlign: "center" }}>
            Cancelar
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
