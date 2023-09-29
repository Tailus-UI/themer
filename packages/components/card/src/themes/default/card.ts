import config from "./../../card.config";

const base = "p-[--card-padding] rounded-[--card-border-radius] border";

const appearances = {
    light: "bg-white border-[--ui-light-border-color]",
    dark: "border-[--ui-light-border-color] bg-[--card-dark-bg]",
    both: "bg-white border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]",
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

const card = base + " " + appearances[config.appearance] + " " + paddings[config.padding];

export default card;
export { card };
