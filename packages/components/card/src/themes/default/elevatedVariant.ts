import config from "./../../card.config";

const base = `p-[--card-padding] rounded-[--card-border-radius] card-shadow`;

const appearances = {
    light: "bg-white",
    dark: "bg-[--card-dark-bg]",
    both: "bg-white dark:bg-[--card-dark-bg]",
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

const elevatedVariant = base + " " + appearances[config.appearance] + " " + paddings[config.padding];

export default elevatedVariant;
export { elevatedVariant };
