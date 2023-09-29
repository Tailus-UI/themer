import config from "./../../card.config";

const base = `p-[--card-padding] rounded-[--card-border-radius] border card-shadow`;

const appearances = {
    light: "bg-white border-[--ui-light-border-color]",
    dark: "bg-[--card-dark-bg] border-[--ui-light-border-color]",
    both: "bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color]",
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

const mixedVariant = base + " " + appearances[config.appearance] + " " + paddings[config.padding];

export default mixedVariant;
export { mixedVariant };
