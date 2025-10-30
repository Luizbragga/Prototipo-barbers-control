// components/MenuButton.tsx
import { BC } from "@/app/theme";
import { Text } from "@/components/Themed";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

export function MenuButton() {
  const [open, setOpen] = React.useState(false as boolean);
  return (
    <View style={{ position: "relative" }}>
      <Pressable onPress={() => setOpen((v) => !v)} style={styles.btn}>
        <Text variant="Body" style={{ color: BC.white }}>
          ☰
        </Text>
      </Pressable>
      {open && (
        <View style={styles.menu}>
          {[
            ["Dashboard", "/(admin)"],
            ["Agenda", "/(admin)/agenda"],
            ["Caixa", "/(admin)/cash"],
            ["Relatórios", "/(admin)/reports"],
            ["Campanhas", "/(admin)/campaigns"],
          ].map(([label, path]) => (
            <Pressable
              key={path}
              onPress={() => router.push(path as any)}
              style={styles.item}
            >
              <Text variant="Body" style={{ color: BC.white }}>
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

import * as React from "react";
const styles = StyleSheet.create({
  btn: {
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  menu: {
    position: "absolute",
    top: 44,
    right: 0,
    zIndex: 50,
    backgroundColor: BC.ink,
    borderColor: BC.gray700,
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    minWidth: 160,
    gap: 6,
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.04)",
  },
});
