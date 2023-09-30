import * as baseAnnonce from "./base";
import config from "./../../annonce.config";
import type { Annonce } from "../annonce.types";

const root = {
    base: baseAnnonce.root,
    appearances: {
        light: "bg-gray-950/5 hover:bg-gray-950/10",
        dark: "bg-white/5 hover:bg-white/10",
        both: "bg-gray-950/5 hover:bg-gray-950/10 dark:bg-white/5 dark:hover:bg-white/10",
    },
};

const softAnnonce: Annonce = {
    root: root.base + " " + root.appearances[config.appearance],
    concern: baseAnnonce.concern,
    message: baseAnnonce.message,
};

export default softAnnonce;
export { softAnnonce };
