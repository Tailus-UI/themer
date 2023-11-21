import { appearance } from "@tailus/themer";
const base = `p-[--card-padding] rounded-[--card-border-radius] border card-shadow`;

const appearances = {
    light: "bg-white border-[--ui-light-border-color]",
    dark: "bg-[--card-dark-bg] border-[--ui-light-border-color]",
    both: "bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color]",
};

const mixedVariant = base + " " + appearances[appearance];

export default mixedVariant;
export { mixedVariant };
