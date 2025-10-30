// app/choose-role.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link, router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

type Role = "cliente" | "barbeiro" | "admin";

export default function ChooseRole() {
  const go = (r: Role) => {
    if (r === "cliente") router.replace("/(tabs)" as any);
    if (r === "barbeiro") router.replace("/(barber)" as any);
    if (r === "admin") router.replace("/(admin)" as any);
  };

  return (
    <View style={styles.screen}>
      {/* título */}
      <View style={styles.header}>
        <Text variant="H1" style={styles.title}>
          Escolha seu papel
        </Text>
        <Text variant="Body" style={styles.subtitle}>
          Selecione como deseja usar o app agora.
        </Text>
      </View>

      {/* cards */}
      <View style={styles.grid}>
        <RoleCard
          title="Cliente"
          desc="Agende serviços, veja histórico e notificações."
          onPress={() => go("cliente")}
        />
        <RoleCard
          title="Barbeiro"
          desc="Veja sua agenda, check-in, finalize e acompanhe comissões."
          onPress={() => go("barbeiro")}
        />
        <RoleCard
          title="Admin"
          desc="Caixa, relatórios, campanhas, planos e configurações."
          onPress={() => go("admin")}
        />
      </View>

      {/* rodapé */}
      <View style={styles.footer}>
        <Text variant="Caption" style={styles.legal}>
          Protótipo UI/UX — navegação simulada entre áreas.
        </Text>
        <Link href="/(auth)/login" asChild>
          <Pressable>
            <Text variant="Caption" style={styles.linkBack}>
              Voltar ao login
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

function RoleCard({
  title,
  desc,
  onPress,
}: {
  title: string;
  desc: string;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text variant="H2" style={styles.cardTitle}>
        {title}
      </Text>
      <Text variant="Body" style={styles.cardDesc}>
        {desc}
      </Text>
      <View style={styles.cta}>
        <Text variant="H3" style={styles.ctaText}>
          Entrar
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BC.black,
    padding: 24,
    gap: 24,
  },
  header: { alignItems: "center", marginTop: 8 },
  title: { color: BC.white },
  subtitle: { color: BC.gray300, marginTop: 4 },

  grid: { gap: 16 },
  card: {
    backgroundColor: BC.ink,
    borderWidth: 1,
    borderColor: BC.gray700,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  cardTitle: { color: BC.white },
  cardDesc: { color: BC.gray300 },
  cta: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: BC.celeste,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  ctaText: { color: BC.black },

  footer: { marginTop: "auto", alignItems: "center", gap: 6 },
  legal: { color: BC.gray500, textAlign: "center" },
  linkBack: { color: BC.celeste },
});
