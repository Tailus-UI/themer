import * as baseAnnonce from "./base";
import config from "./../../annonce.config";

const root = {
    base: "border " + baseAnnonce.root,
    appearances: {
        light: "border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color]",
        dark: "border-[--ui-dark-border-color] hover:border-[--ui-dark-border-hover-color]",
        both: "border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color]",
    },
};

const annonce = {
    root: root.base + " " + root.appearances[config.appearance],
    concern: baseAnnonce.concern,
    message: baseAnnonce.message.base + " " + baseAnnonce.message.appearances[config.appearance],
};

export default annonce;
export { annonce };
