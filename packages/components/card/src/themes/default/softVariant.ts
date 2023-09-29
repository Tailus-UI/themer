import config from "./../../card.config";

const base = `p-[--card-padding] rounded-[--card-border-radius]`;

const appearances = {
    light: "bg-[--card-light-bg]",
    dark: "bg-[--card-dark-bg]",
    both: "bg-[--card-light-bg] dark:bg-[--card-dark-bg]",
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

const softVariant = base + " " + appearances[config.appearance] + " " + paddings[config.padding];

export default softVariant;
export { softVariant };
