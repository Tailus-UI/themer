import * as baseAnnonce from "./base";
import config from "./../../annonce.config";

const root = {
    base: baseAnnonce.root,
    appearances: {
        light: "bg-gray-950/5 hover:bg-gray-950/10",
        dark: "bg-white/5 hover:bg-white/10",
        both: "bg-gray-950/5 hover:bg-gray-950/10 dark:bg-white/5 dark:hover:bg-white/10",
    },
};

const softAnnonce = {
    root: root.base + " " + root.appearances[config.appearance],
    concern: baseAnnonce.concern,
    message: baseAnnonce.message.base + " " + baseAnnonce.message.appearances[config.appearance],
};

export default softAnnonce;
export { softAnnonce };
