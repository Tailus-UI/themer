import { appearance } from "@tailus/themer";

const base = "p-[--card-padding] rounded-[--card-border-radius] border";

const appearances = {
    light: "bg-white border-[--ui-light-border-color]",
    dark: "border-[--ui-light-border-color] bg-[--card-dark-bg]",
    both: "bg-white border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]",
};

const card = base + " " + appearances[appearance];

export default card;
export { card };
