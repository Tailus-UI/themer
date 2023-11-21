import { appearance } from "@tailus/themer/dist/plugin";
const base = `p-[--card-padding] rounded-[--card-border-radius] card-shadow`;

const appearances = {
    light: "bg-white",
    dark: "bg-[--card-dark-bg]",
    both: "bg-white dark:bg-[--card-dark-bg]",
};

const elevatedVariant = base + " " + appearances[appearance];

export default elevatedVariant;
export { elevatedVariant };
