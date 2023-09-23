import { base } from "../../../../badge/dist/themes/default/base";
import config from "./../../popover.config";

const baseContent = {
    base: "relative max-w-xs border rounded-[--popover-border-radius] p-[--popover-padding] menu-shadow",
    appearance: {
        light: "border-[--menu-light-border-color] bg-white",
        dark: "border-[--menu-dark-border-color] bg-[--menu-dark-bg]",
        both: "border-[--menu-light-border-color] bg-white dark:border-[--menu-dark-border-color] dark:bg-[--menu-dark-bg]",
    },
};

const baseArrow = {
    base: "border",
    appearance: {
        light: "fill-white border-[--menu-light-border-color]",
        dark: "fill-[--menu-dark-bg] border-[--menu-dark-border-color]",
        both: "fill-white border-[--menu-light-border-color] dark:fill-[--menu-dark-bg] dark:border-[--menu-dark-border-color]",
    },
};

const baseTitle = {
    base: "mb-2 text-base font-semibold",
    appearances: {
        light: "text-gray-900",
        dark: "text-white",
        both: "text-gray-900 dark:text-white",
    },
};

const baseDescription = {
    light: "text-gray-700",
    dark: "text-gray-300",
    both: "text-gray-700 dark:text-gray-300",
};

const content = baseContent.base + " " + baseContent.appearance[config.appearance];
const arrow = baseArrow.base + " " + baseArrow.appearance[config.appearance];
const description = baseDescription[config.appearance];
const title = baseTitle.base + " " + baseTitle.appearances[config.appearance];

export { content, arrow, title, description };
