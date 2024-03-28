import type { Color, Info, Success, Danger, Warning, Gray, ColorShades } from "../../types";

export type PaletteContent = {
    primary: Color;
    secondary: Color;
    accent: Color;
    info: Info;
    success: Success;
    danger: Danger;
    warning: Warning;
    gray: Gray;
};

export type FeedbackPalette = {
    danger: Danger;
    warning: Warning;
    info: Info;
    success: Success;
};

export type Palette =
    | "trust"
    | "mystery"
    | "romance"
    | "energy"
    | "winter"
    | "passion"
    | "nature"
    | "spring"
    | "oz";

export type IntentConfig = Color | ColorShades;
export type IntentsWithoutExtendedPalette = {
    primary: IntentConfig;
    secondary: IntentConfig;
    accent: IntentConfig;
    info: IntentConfig;
    success: IntentConfig;
    danger: IntentConfig;
    warning: IntentConfig;
    gray: IntentConfig;
};

export type IntentsWithExtendedPalette = {
    extend: Palette;
    primary?: IntentConfig;
    secondary?: IntentConfig;
    accent?: IntentConfig;
    info?: IntentConfig;
    success?: IntentConfig;
    danger?: IntentConfig;
    warning?: IntentConfig;
    gray?: IntentConfig;
};

export type PaletteConfig = Palette | IntentsWithExtendedPalette | IntentsWithoutExtendedPalette;
