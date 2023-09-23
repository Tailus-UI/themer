import config from "./../../tooltip.config";

const baseContent = {
    base: "select-none rounded-[--tooltip-border-radius] px-3 py-1.5 text-sm leading-none menu-shadow",
    motion: "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade will-change-[transform,opacity]",
    appearances: {
        light: "bg-gray-800 text-white",
        dark: "bg-white text-gray-700",
        both: "bg-gray-800 text-white dark:bg-white dark:text-gray-700",
    },
};

const baseArrow = {
    light: "fill-gray-800",
    dark: "fill-white",
    both: "fill-gray-800 dark:fill-white",
};

const content =
    baseContent.base + " " + baseContent.appearances[config.appearance] + " " + baseContent.motion;
const arrow = baseArrow[config.appearance];

export { content, arrow };
