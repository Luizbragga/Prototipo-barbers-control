// components/BCButton.tsx
import { BC } from "@/app/theme";
import { ActivityIndicator, Pressable, ViewStyle } from "react-native";
import { Text } from "./Themed";

type Props = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

export function BCButton({
  title,
  onPress,
  variant = "primary",
  loading,
  disabled,
  style,
}: Props) {
  const base: ViewStyle = {
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: variant === "secondary" ? 1 : 0,
  };
  const colors =
    variant === "primary"
      ? { bg: BC.celeste, fg: BC.black, bd: "transparent" }
      : variant === "danger"
      ? { bg: BC.error, fg: BC.white, bd: "transparent" }
      : { bg: "transparent", fg: BC.celeste, bd: BC.celeste };

  const opacity = disabled || loading ? 0.6 : 1;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        base,
        { backgroundColor: colors.bg, borderColor: colors.bd as any, opacity },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={colors.fg} />
      ) : (
        <Text variant="H3" style={{ color: colors.fg, textAlign: "center" }}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
