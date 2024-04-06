import type { Shade } from "../../types";

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
        select: Shade;
    };
};
