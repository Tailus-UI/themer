import config from "./../../card.config";

const base = `p-[--card-padding] rounded-[--card-border-radius]`;

const appearances = {
    light: "bg-[--card-light-bg]",
    dark: "bg-[--card-dark-bg]",
    both: "bg-[--card-light-bg] dark:bg-[--card-dark-bg]",
};

const softVariant = base + " " + appearances[config.appearance];

export default softVariant;
export { softVariant };
