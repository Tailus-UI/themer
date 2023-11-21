import { appearance } from "@tailus/themer";

const base = `p-[--card-padding] rounded-[--card-border-radius]`;

const appearances = {
    light: "bg-[--card-light-bg]",
    dark: "bg-[--card-dark-bg]",
    both: "bg-[--card-light-bg] dark:bg-[--card-dark-bg]",
};

const softVariant = base + " " + appearances[appearance];

export default softVariant;
export { softVariant };
