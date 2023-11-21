// import config from "./../../tabs.config";
import { appearance } from "@tailus/themer";

const baseList = {
    base: "relative w-full shrink-0 h-10 flex items-center p-1 rounded-[--tabs-border-radius]",
    appearances: {
        light: "bg-[--tabs-light-bg]",
        dark: "bg-[--tabs-dark-bg]",
        both: "bg-[--tabs-light-bg] dark:bg-[--tabs-dark-bg]",
    },
};

const outlinedList = {
    light: "border-[--tabs-light-border-color]",
    dark: "border-[--tabs-dark-border-color]",
    both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
};

const outlinedIndicator = {
    base: "border",
    appearances: {
        light: "border-[--tabs-light-border-color]",
        dark: "border-[--tabs-dark-border-color]",
        both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
    },
};

const baseTrigger = {
    base: "relative px-5 h-full flex-1 flex gap-2 items-center justify-center leading-none select-none rounded-[calc(var(--tabs-border-radius)-0.25rem)] cursor-pointer",
    appearances: {
        light: "text-gray-700 data-[state=active]:text-gray-900",
        dark: "text-gray-300 data-[state=active]:text-white",
        both: "text-gray-700 dark:text-gray-300 data-[state=active]:text-gray-900 dark:data-[state=active]:text-white",
    },
};

const baseIndicator = {
    base: "block ease-out left-0 transition-all duration-300 absolute inset-y-1 rounded-[calc(var(--tabs-border-radius)-0.25rem)]",
    appearances: {
        light: "bg-white",
        dark: "bg-[--tabs-indicator-dark-bg]",
        both: "bg-white dark:bg-[--tabs-indicator-dark-bg]",
    },
};

const baseContent = {
    base: "outline-none focus:ring-2 focus:ring-offset-2 rounded-[--cards-border-radius]",
    appearances: {
        light: "focus:ring-primary-600/10 focus:ring-offset-white",
        dark: "focus:ring-white/10 focus:ring-offset-gray-950",
        both: "focus:ring-primary-600/10 focus:ring-offset-white dark:focus:ring-white/10 dark:focus:ring-offset-gray-950",
    },
};

const triggerIcon = "h-[1.125rem] w-[1.125rem]";

const list = {
    soft: baseList.base + " " + baseList.appearances[appearance],
    outlined:
        baseList.base +
        " border " +
        baseList.appearances[appearance] +
        " " +
        outlinedList[appearance],
};

const trigger = baseTrigger.base + " " + baseTrigger.appearances[appearance];

const indicator = {
    elevated:
        baseIndicator.base + " shadow shadow-gray-950/10 " + baseIndicator.appearances[appearance],
    outlined:
        baseIndicator.base +
        " border " +
        baseIndicator.appearances[appearance] +
        " " +
        outlinedIndicator.appearances[appearance],
};
const content = baseContent.base + " " + baseContent.appearances[appearance];

const softTabs = {
    list,
    trigger,
    triggerIcon,
    indicator: indicator,
    content,
};

export { list, trigger, triggerIcon, content, softTabs };
