// app/theme/index.ts
import {
  DarkTheme as NavDark,
  DefaultTheme as NavLight,
} from "@react-navigation/native";
import { BC } from "./tokens";

export const bcDark = {
  ...NavDark,
  colors: {
    ...NavDark.colors,
    background: BC.black,
    card: BC.ink,
    text: BC.white,
    primary: BC.celeste,
    border: BC.gray700,
    notification: BC.celeste600,
  },
};

export const bcLight = {
  ...NavLight,
  colors: {
    ...NavLight.colors,
    background: BC.white,
    card: BC.gray300,
    text: BC.black,
    primary: BC.celeste,
    border: BC.gray300,
    notification: BC.celeste600,
  },
};

export { BC };
