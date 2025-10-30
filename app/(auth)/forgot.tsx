// app/(auth)/forgot.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // validação simples só para o protótipo
  const canSubmit = useMemo(
    () => /\S+@\S+\.\S+/.test(email.trim()) || email.trim().length >= 6,
    [email]
  );

  if (sent) {
    return (
      <View style={[styles.screen, { justifyContent: "center" }]}>
        <Text variant="H1" style={styles.title}>
          Verifique seu email
        </Text>
        <Text variant="Body" style={styles.subtitle}>
          Enviamos um link para você redefinir sua senha (mock).
        </Text>

        <View style={{ height: 16 }} />

        <Link href="/(auth)/login" asChild>
          <Pressable
            style={[styles.primaryBtn, { backgroundColor: BC.celeste }]}
          >
            <Text variant="H3" style={{ color: BC.black, fontWeight: "700" }}>
              Voltar ao login
            </Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.screen}>
        {/* título */}
        <View style={styles.header}>
          <Text variant="H1" style={styles.title}>
            Recuperar senha
          </Text>
          <Text variant="Body" style={styles.subtitle}>
            Informe seu email (ou WhatsApp) para receber o link.
          </Text>
        </View>

        {/* form */}
        <View style={styles.form}>
          <View>
            <Text variant="Caption" style={styles.label}>
              Email ou WhatsApp
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="ex.: voce@exemplo.com  ou  +351 9xx xxx xxx"
              placeholderTextColor={BC.gray500}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>
        </View>

        {/* ações */}
        <View style={styles.actions}>
          <Pressable
            disabled={!canSubmit}
            onPress={() => setSent(true)} // mock
            style={[styles.primaryBtn, !canSubmit && styles.btnDisabled]}
          >
            <Text
              variant="H3"
              style={[
                styles.primaryBtnText,
                !canSubmit && styles.btnTextDisabled,
              ]}
            >
              Enviar link
            </Text>
          </Pressable>

          <View style={styles.inline}>
            <Text variant="Body" style={styles.inlineMuted}>
              Lembrou a senha?
            </Text>
            <Link href="/(auth)/login" asChild>
              <Pressable>
                <Text variant="Body" style={styles.inlineLink}>
                  Voltar ao login
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    gap: 24,
    backgroundColor: BC.black,
  },
  header: { alignItems: "center" },
  title: { color: BC.white },
  subtitle: { color: BC.gray300, marginTop: 4 },

  form: { gap: 16 },
  label: { color: BC.gray500, marginBottom: 8 },
  input: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: BC.white,
  },

  actions: { gap: 12 },
  primaryBtn: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: BC.success,
    alignItems: "center",
  },
  btnDisabled: { backgroundColor: "rgba(255,255,255,0.10)" },
  primaryBtnText: { color: BC.black, fontWeight: "700" },
  btnTextDisabled: { color: BC.gray300, fontWeight: "600" },

  inline: { flexDirection: "row", justifyContent: "center", gap: 8 },
  inlineMuted: { color: BC.gray500 },
  inlineLink: { color: BC.celeste, fontWeight: "600" },
});
