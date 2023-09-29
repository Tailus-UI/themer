import config from "../../card.config";
const base = `p-px rounded-[--card-border-radius] bg-gradient-to-b to-50% card-shadow`;

const appearances = {
    light: "from-[--ui-light-border-color] to-[--card-light-bg]",
    dark: "from-[--ui-dark-border-color] to-[--card-dark-bg]",
    both: "from-[--ui-light-border-color] to-[--card-light-bg] dark:from-[--ui-dark-border-color] dark:to-[--card-dark-bg]",
};

const paddings = {
    none: "",
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    height: "",
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
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
    outer: base + " " + appearances[config.appearance] + " " + paddings[config.padding],
    inner: innnerCard.base + " " + innnerCard.appearances[config.appearance] + " " + paddings[config.padding],
};

export default elevatedGradientVariant;
export { elevatedGradientVariant };
