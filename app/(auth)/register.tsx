// app/(auth)/register.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { Link, router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function Register() {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState(""); // email ou whatsapp
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const passOk = password.length >= 6 && password === confirm;
  const canSubmit = useMemo(() => {
    return name.trim().length >= 2 && identifier.trim().length > 3 && passOk;
  }, [name, identifier, passOk]);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.screen}>
        {/* título */}
        <View style={styles.header}>
          <Text variant="H1" style={styles.title}>
            Criar conta
          </Text>
          <Text variant="Body" style={styles.subtitle}>
            Registe-se para começar a gerir sua barbearia.
          </Text>
        </View>

        {/* formulário */}
        <View style={styles.form}>
          <View>
            <Text variant="Caption" style={styles.label}>
              Nome
            </Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="ex.: João Silva"
              placeholderTextColor={BC.gray500}
              autoCapitalize="words"
              style={styles.input}
            />
          </View>

          <View>
            <Text variant="Caption" style={styles.label}>
              Email ou WhatsApp
            </Text>
            <TextInput
              value={identifier}
              onChangeText={setIdentifier}
              placeholder="ex.: voce@exemplo.com  ou  +351 9xx xxx xxx"
              placeholderTextColor={BC.gray500}
              autoCapitalize="none"
              keyboardType="email-address"
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

          <View>
            <Text variant="Caption" style={styles.label}>
              Confirmar senha
            </Text>
            <TextInput
              value={confirm}
              onChangeText={setConfirm}
              placeholder="repita a senha"
              placeholderTextColor={BC.gray500}
              secureTextEntry
              style={styles.input}
            />
            {!passOk && confirm.length > 0 && (
              <Text variant="Caption" style={styles.errorMsg}>
                As senhas devem ter 6+ caracteres e coincidir.
              </Text>
            )}
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
              Criar conta
            </Text>
          </Pressable>

          <View style={styles.inline}>
            <Text variant="Body" style={styles.inlineMuted}>
              Já tem conta?
            </Text>
            <Link href="/(auth)/login" asChild>
              <Pressable>
                <Text variant="Body" style={styles.inlineLink}>
                  Entrar
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
  errorMsg: { color: BC.error, marginTop: 6 },

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
