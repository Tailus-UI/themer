import config from "../../../tabs.config";

import softTabsColors from "./colors";
import { content } from "../base";

const baseList = "relative w-full flex items-center";

const baseTrigger = {
    base: "relative transition-all border h-full flex-1 flex gap-2 items-center justify-center leading-none select-none rounded-[--tabs-soft-border-radius] cursor-pointer data-[state=active]:border-transparent",
    appearances: {
        light: "text-gray-700 border-[--tabs-light-border-color] ",
        dark: "text-gray-300 border-[--tabs-dark-border-color]",
        both: "text-gray-700 border-[--tabs-light-border-color] dark:text-gray-300 dark:border-[--tabs-dark-border-color]",
    },
};

const listSizes = {
    xs: "h-7 gap-2 text-sm [&>*:not(svg)]:px-2.5",
    sm: "h-8 gap-2 text-sm [&>*:not(svg)]:px-3.5",
    md: "h-9 gap-3 text-base [&>*:not(svg)]:px-4",
    lg: "h-10 gap-3 text-base [&>*:not(svg)]:px-5",
    xl: "h-12 gap-4 text-lg [&>*:not(svg)]:px-6",
    xxl: "h-14 gap-4 text-xl [&>*:not(svg)]:px-7",
    xxxl: "h-16 gap-6 text-xl [&>*:not(svg)]:px-10",
};

const triggerIcon = {
    xs: "h-3.5 w-3.5",
    sm: "h-4 w-4",
    md: "h-[1.125rem] w-[1.125rem]",
    lg: "h-5 w-5",
    xl: "h-6 w-6",
    xxl: "h-7 w-7",
    xxxl: "h-8 w-8",
};

const getListSize = (size) => {
    return baseList + " " + listSizes[size];
};

const getTriggerColor = (color, colors = softTabsColors) => {
    return (
        baseTrigger.base + " " + baseTrigger.appearances[config.appearance] + " " + colors[color]
    );
};

const list = {
    xs: getListSize("xs"),
    sm: getListSize("sm"),
    md: getListSize("md"),
    lg: getListSize("lg"),
    xl: getListSize("xl"),
    xxl: getListSize("xxl"),
    xxxl: getListSize("xxxl"),
};

const trigger = {
    primary: getTriggerColor("primary"),
    secondary: getTriggerColor("secondary"),
    accent: getTriggerColor("accent"),
    neutral: getTriggerColor("neutral"),
    gray: getTriggerColor("gray"),
};

const tabs = {
    list,
    trigger,
    triggerIcon,
    content,
};

export { tabs };
export default tabs;
