import type { Shade, Sizes, SizesWithoutFull } from "../types";
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
