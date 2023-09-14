import config from "./../../card.config";

const base = `p-px rounded-[--card-border-radius] bg-gradient-to-b to-transparent`;

const innnerCard = {
    base: "p-[calc(var(--card-padding)-1px)] rounded-[calc(var(--card-border-radius)-1px)]",
    appearances: {
        light: "bg-[--card-light-bg]",
        dark: "bg-[--card-dark-bg]",
        both: "bg-[--card-light-bg] dark:bg-[--card-dark-bg]",
    },
};

const appearances = {
    light: "from-[--ui-light-border-color]",
    dark: "from-[--ui-dark-border-color]",
    both: "from-[--ui-light-border-color] dark:from-[--ui-dark-border-color]",
};

const gradientBordersVariant = {
    outer: base + " " + appearances[config.appearance],
    inner: innnerCard.base + " " + innnerCard.appearances[config.appearance],
};

export default gradientBordersVariant;
export { gradientBordersVariant };
