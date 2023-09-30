import * as baseAnnonce from "./base";
import config from "./../../annonce.config";
import { Annonce } from "../annonce.types";

const root = {
    base: "border " + baseAnnonce.root,
    appearances: {
        light: "border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color]",
        dark: "border-[--ui-dark-border-color] hover:border-[--ui-dark-border-hover-color]",
        both: "border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color]",
    },
};

const annonce: Annonce = {
    root: root.base + " " + root.appearances[config.appearance],
    concern: baseAnnonce.concern,
    message: baseAnnonce.message,
};

export default annonce;
export { annonce };
