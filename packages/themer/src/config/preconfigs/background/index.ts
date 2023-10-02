import light from "./light";
import lighter from "./lighter";
import high from "./high";
import higher from "./higher";

export type Background = {
    card: string;
    tabs: string;
    field: string;
    fieldFocus: string;
    accordion: {
        soft: string;
        ghost: string;
    };
    dark: {
        card: string;
        tabs: {
            list: string;
            indicator: string;
            trigger: string;
        };
        field: string;
        fieldFocus: string;
        accordion: {
            elevated: string;
            soft: string;
            ghost: string;
        };
        menu: string;
        feedback: string;
    };
};

export default {
    light,
    lighter,
    high,
    higher,
};

export { light, lighter, high, higher };
