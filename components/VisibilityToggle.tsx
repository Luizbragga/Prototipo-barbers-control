import { BC } from "@/app/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  hidden: boolean;
  onToggle: () => void;
  iconOnly?: boolean; // se true, mostra só o ícone (sem texto)
};

export function VisibilityToggle({ hidden, onToggle, iconOnly }: Props) {
  return (
    <Pressable
      onPress={onToggle}
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        backgroundColor: BC.ink,
        borderColor: BC.gray700,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
      }}
      accessibilityRole="button"
      accessibilityLabel={hidden ? "Mostrar valores" : "Ocultar valores"}
    >
      <Ionicons name={hidden ? "eye" : "eye-off"} size={18} color="#fff" />
      {!iconOnly && (
        <Text style={{ color: "#fff" }}>{hidden ? "Mostrar" : "Ocultar"}</Text>
      )}
    </Pressable>
  );
}
