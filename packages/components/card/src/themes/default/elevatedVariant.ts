import config from "./../../card.config";

const base = `p-[--card-padding] rounded-[--card-border-radius] card-shadow`;

const appearances = {
    light: "bg-white",
    dark: "bg-[--card-dark-bg]",
    both: "bg-white dark:bg-[--card-dark-bg]",
};

const elevatedVariant = base + " " + appearances[config.appearance];

export default elevatedVariant;
export { elevatedVariant };
