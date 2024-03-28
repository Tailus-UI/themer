import type { Opacity, ShadowSizes } from "../types";
import type { PaletteConfig, Palette } from "./palette/types";
import type { Color, ColorShades, Info, Warning, Danger, Success, Gray } from "./../types";

export type Preconfigs = {
    appearance?: "light" | "dark" | "both";
    palette?: {
        extend: Palette;
        primary?: Color | ColorShades;
        secondary?: Color | ColorShades;
        accent?: Color | ColorShades;
        info?: Info | ColorShades;
        warning?: Warning | ColorShades;
        danger?: Danger | ColorShades;
        success?: Success | ColorShades;
        gray?: Gray | ColorShades;
    };
    background?: "light" | "lighter" | "high" | "higher";
    border?: "light" | "lighter" | "high" | "higher";
    padding?: "small" | "normal" | "medium" | "large" | "larger" | "largest";
    radius?: "boxy" | "sharp" | "smooth" | "smoothest";
    shadow?: {
        size?: ShadowSizes;
        opacity?: Opacity;
    };
};
