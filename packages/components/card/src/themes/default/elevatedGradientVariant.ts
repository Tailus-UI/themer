import { appearance } from "@tailus/themer";
const base = `p-px rounded-[--card-border-radius] bg-gradient-to-b to-50% card-shadow`;

const appearances = {
    light: "from-[--ui-light-border-color] to-[--card-light-bg]",
    dark: "from-[--ui-dark-border-color] to-[--card-dark-bg]",
    both: "from-[--ui-light-border-color] to-[--card-light-bg] dark:from-[--ui-dark-border-color] dark:to-[--card-dark-bg]",
};

const innnerCard = {
    base: "p-[calc(var(--card-padding)-1px)] rounded-[calc(var(--card-border-radius)-1px)]",
    appearances: {
        light: "bg-white",
        dark: "bg-[--card-dark-bg]",
        both: "bg-white dark:bg-[--card-dark-bg]",
    },
};

const elevatedGradientVariant = {
    outer: base + " " + appearances[appearance],
    inner: innnerCard.base + " " + innnerCard.appearances[appearance],
};

export default elevatedGradientVariant;
export { elevatedGradientVariant };
