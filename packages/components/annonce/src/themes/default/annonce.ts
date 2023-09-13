import * as baseAnnonce from "./base";
import config from "./../../annonce.config";

const root = {
    base: "border " + baseAnnonce.root,
    appearances: {
        light: "border-gray-950/10 hover:border-gray-950/20",
        dark: "border-white/10 hover:border-white/20",
        both: "border-gray-950/10 hover:border-gray-950/20 dark:border-white/10 dark:hover:border-white/20",
    },
};

const annonce = {
    root: root.base + " " + root.appearances[config.appearance],
    concern: baseAnnonce.concern,
    message: baseAnnonce.message.base + " " + baseAnnonce.message.appearances[config.appearance],
};

export default annonce;
export { annonce };