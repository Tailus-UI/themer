import type { Opacity, Shade, ShadowSizes, Sizes, SizesWithoutFull } from "../types";
import type { PaddingSizes } from "../types";

export type Background = {
    card: Shade;
    tabs: Shade;
    field: Shade;
    fieldFocus: Shade;
    accordion: {
        soft: Shade;
        ghost: Shade;
    };
    dark: {
        card: Shade;
        tabs: {
            list: Shade;
            indicator: Shade;
            trigger: Shade;
        };
        field: Shade;
        fieldFocus: Shade;
        accordion: {
            elevated: Shade;
            soft: Shade;
            ghost: Shade;
        };
        menu: Shade;
        feedback: Shade;
    };
};
export type BorderColors = {
    ui: Shade;
    menu: Shade;
    tabs: Shade;
    feedback: Shade;
    field: Shade;
    hover: Shade;
    dark: {
        ui: Shade;
        menu: Shade;
        tabs: Shade;
        feedback: Shade;
        field: Shade;
        hover: Shade;
    };
};

export type Padding = {
    card: PaddingSizes;
    flag: PaddingSizes;
    popover: PaddingSizes;
};

export type Radius = {
    button: Sizes;
    accordion: SizesWithoutFull;
    annonce: Sizes;
    avatar: Sizes;
    badge: Sizes;
    card: SizesWithoutFull;
    flag: SizesWithoutFull;
    field: Sizes;
    popover: SizesWithoutFull;
    tooltip: Sizes;
    menu: SizesWithoutFull;
    alert: SizesWithoutFull;
    switch: Sizes;
    toast: SizesWithoutFull;
    tabs: {
        default: Sizes;
        soft: Sizes;
        bottomIndicator: Sizes;
    };
};

export type Preconfigs = {
    appearance?: "light" | "dark" | "both";
    background?: "light" | "lighter" | "high" | "higher";
    border?: "light" | "lighter" | "high" | "higher";
    padding?: "small" | "medium" | "large" | "larger" | "largest";
    radius?: "boxy" | "sharp" | "smooth" | "smoothest";
    shadow?: {
        size?: ShadowSizes;
        opacity?: Opacity;
    };
};
