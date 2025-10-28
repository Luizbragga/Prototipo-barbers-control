// app/(tabs)/service.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

type Svc = { name: string; dur: string; price: string; available: boolean };

export default function AgendarStep2() {
  const services: Svc[] = [
    {
      name: "Corte clássico",
      dur: "30m",
      price: "€15 / R$45",
      available: true,
    },
    {
      name: "Barba premium",
      dur: "30m",
      price: "€20 / R$60",
      available: false,
    }, // indisponível (mock)
    {
      name: "Combo Corte+Barba",
      dur: "60m",
      price: "€30 / R$90",
      available: true,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: BC.black, padding: 24, gap: 16 }}>
      <Text variant="H1" style={{ color: BC.white }}>
        Agendar
      </Text>
      <Text variant="Body" style={{ color: BC.gray300 }}>
        Passo 2 de 4 — Escolhe o serviço
      </Text>

      <View style={{ gap: 12 }}>
        {services.map((s) => {
          const disabled = !s.available;
          return (
            <Pressable
              key={s.name}
              disabled={disabled}
              style={{
                backgroundColor: disabled ? BC.ink : BC.ink,
                borderRadius: 12,
                borderWidth: 1,
                borderColor: disabled ? BC.gray700 : BC.gray700,
                opacity: disabled ? 0.5 : 1,
                padding: 14,
                gap: 4,
              }}
            >
              <Text variant="H3" style={{ color: BC.white }}>
                {s.name}
              </Text>
              <Text variant="Body" style={{ color: BC.gray300 }}>
                {s.dur} • {s.price}
              </Text>
              {disabled && (
                <Text variant="Caption" style={{ color: BC.error }}>
                  Serviço indisponível no momento
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>

      {/* Continuar só como mock — normalmente só habilitaríamos se um serviço disponível fosse selecionado */}
      <Link href="/(tabs)/barber" asChild>
        <Pressable
          style={{
            marginTop: 8,
            backgroundColor: BC.celeste,
            padding: 14,
            borderRadius: 12,
          }}
        >
          <Text variant="H3" style={{ color: BC.black, textAlign: "center" }}>
            Continuar
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
