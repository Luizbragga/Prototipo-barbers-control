// components/Themed.tsx
import { Text as RNText, type TextProps } from "react-native";

type Variant = "H1" | "H2" | "H3" | "Body" | "Caption";
type Props = TextProps & {
  variant?: Variant;
  weight?: "regular" | "medium" | "semibold" | "bold";
};

const styles: Record<
  Variant,
  { fontSize: number; lineHeight: number; fontFamily: string }
> = {
  H1: { fontSize: 28, lineHeight: 32, fontFamily: "Montserrat_700Bold" },
  H2: { fontSize: 22, lineHeight: 28, fontFamily: "Montserrat_600SemiBold" },
  H3: { fontSize: 18, lineHeight: 24, fontFamily: "Montserrat_600SemiBold" },
  Body: { fontSize: 16, lineHeight: 22, fontFamily: "Poppins_400Regular" },
  Caption: { fontSize: 13, lineHeight: 18, fontFamily: "Poppins_400Regular" },
};

export function Text({ variant = "Body", weight, style, ...rest }: Props) {
  const base = styles[variant];
  const fontFamily =
    weight === "medium" && base.fontFamily.startsWith("Poppins")
      ? "Poppins_500Medium"
      : base.fontFamily;

  return (
    <RNText
      {...rest}
      style={[
        { fontSize: base.fontSize, lineHeight: base.lineHeight, fontFamily },
        style,
      ]}
    />
  );
}
