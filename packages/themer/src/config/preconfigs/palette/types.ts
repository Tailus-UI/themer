import type { Color, Info, Success, Danger, Warning, Gray } from "../../types";

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
