// app/(auth)/login.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const [identifier, setIdentifier] = useState(""); // email ou telefone
  const [password, setPassword] = useState("");

  const canSubmit = identifier.trim().length > 3 && password.length >= 6;

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.screen}>
        {/* marca */}
        <View style={styles.header}>
          <Text variant="H1" style={styles.title}>
            Barber Control
          </Text>
          <Text variant="Body" style={styles.subtitle}>
            Gerencie sua barbearia
          </Text>
        </View>

        {/* formulário */}
        <View style={styles.form}>
          <View>
            <Text variant="Caption" style={styles.label}>
              Email ou numero
            </Text>
            <TextInput
              value={identifier}
              onChangeText={setIdentifier}
              placeholder="ex.: voce@exemplo.com  ou  +351 9xx xxx xxx"
              placeholderTextColor={BC.gray500}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View>
            <Text variant="Caption" style={styles.label}>
              Senha
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="mín. 6 caracteres"
              placeholderTextColor={BC.gray500}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <View style={styles.right}>
            <Link href="/(auth)/forgot" asChild>
              <Pressable>
                <Text variant="Body" style={styles.linkText}>
                  Esqueci minha senha
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* ações */}
        <View style={styles.actions}>
          <Pressable
            disabled={!canSubmit}
            onPress={() => router.replace("/choose-role" as any)}
            style={[styles.primaryBtn, !canSubmit && styles.btnDisabled]}
          >
            <Text
              variant="H3"
              style={[
                styles.primaryBtnText,
                !canSubmit && styles.btnTextDisabled,
              ]}
            >
              Entrar
            </Text>
          </Pressable>

          <View style={styles.inline}>
            <Text variant="Body" style={styles.inlineMuted}>
              Novo por aqui?
            </Text>
            <Link href="/(auth)/register" asChild>
              <Pressable>
                <Text variant="Body" style={styles.inlineLink}>
                  Criar conta
                </Text>
              </Pressable>
            </Link>
          </View>
        </View>

        {/* legal */}
        <View style={styles.footer}>
          <Text variant="Caption" style={styles.legal}>
            Ao continuar você concorda com os Termos & Privacidade.
          </Text>
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
  right: { alignItems: "flex-end" },
  linkText: { color: BC.celeste, fontWeight: "600" },

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

  footer: { marginTop: "auto", marginBottom: 24, alignItems: "center" },
  legal: { color: BC.gray500, textAlign: "center" },
});
