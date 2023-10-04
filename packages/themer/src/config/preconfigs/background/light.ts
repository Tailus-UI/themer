import type { Background } from ".";

export const light: Background = {
    card: "100",
    tabs: "100",
    field: "100",
    fieldFocus: "50",
    accordion: {
        soft: "100",
        ghost: "100",
    },
    dark: {
        card: "900",
        tabs: {
            list: "800",
            indicator: "950",
            trigger: "800",
        },
        feedback: "900",
        menu: "900",
        field: "800",
        fieldFocus: "900",
        accordion: {
            elevated: "900",
            soft: "900",
            ghost: "900",
        },
        select: "950",
    },
};

export default light;
