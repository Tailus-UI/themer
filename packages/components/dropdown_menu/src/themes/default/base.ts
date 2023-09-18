import config from "./../../dropdownmenu.config";
import { solidColors, solidSubTrigerColors } from "./colors";

const baseContent = {
    base: "min-w-[10rem] overflow-hidden rounded-[--menu-border-radius] menu-shadow border p-2",
    motion: "data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade will-change-[opacity,transform]",
    appearance: {
        light: "border-[--menu-light-border-color] bg-white/[--menu-light-bg-opacity] backdrop-blur-[--menu-light-backdrop-blur]",
        dark: "border-[--menu-dark-border-color] bg-[--menu-dark-bg] backdrop-[--menu-dark-backdrop-blur]",
        both: "border-[--menu-light-border-color] bg-white/[--menu-light-bg-opacity] backdrop-blur-[--menu-light-backdrop-blur] dark:border-[--menu-dark-border-color] dark:bg-[--menu-dark-bg] dark:backdrop-blur-[--menu-dark-backdrop-blur]",
    },
};

const baseItem = {
    base: "relative flex select-none items-center rounded-[calc(var(--menu-border-radius)-0.5rem)] gap-2 px-3 py-2 text-sm leading-none outline-none data-[disabled]:cursor-not-allowed",
    appearance: {
        light: "data-[disabled]:text-gray-300",
        dark: "data-[disabled]:text-gray-700",
        both: "data-[disabled]:text-gray-300 dark:data-[disabled]:text-gray-700",
    },
};

const baseSeparator = {
    base: "mx-3.5 my-2 h-[1px]",
    appearance: {
        light: "bg-[--separator-light-color]",
        dark: "bg-[--separator-dark-color]",
        both: "bg-[--separator-light-color] dark:bg-[--separator-dark-color]",
    },
};

const icon = "h-[1.125rem] w-[1.125rem]";
const rightIcon = "ml-auto pl-5";

const content =
    baseContent.base + " " + baseContent.appearance[config.appearance] + " " + baseContent.motion;
const item = baseItem.base + " " + baseItem.appearance[config.appearance];
const separator = baseSeparator.base + " " + baseSeparator.appearance[config.appearance];
const subContent = baseContent.base + " " + baseContent.appearance[config.appearance];

const getItem = (color, colors: any = solidColors) => {
    return item + " " + colors[color];
};

const getSubTrigger = (
    color,
    colors: any = solidColors,
    subTriggerColors: any = solidSubTrigerColors
) => {
    return item + " " + colors[color] + " " + subTriggerColors[color];
};

export { content, getItem, separator, icon, subContent, rightIcon, getSubTrigger };
