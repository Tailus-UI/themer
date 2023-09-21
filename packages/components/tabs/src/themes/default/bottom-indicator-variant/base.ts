import config from "./../../../tabs.config";
import { triggerIcon } from "./../base";

const baseList = {
    base: "relative w-full flex gap-4 pb-2 border-b",
    appearances: {
        light: "border-[--tabs-light-border-color]",
        dark: "border-[--tabs-dark-border-color]",
        both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
    },
};

const baseTrigger = {
    base: "block relative rounded-[--tabs-bottom-indicator-border-radius] px-2 h-8 flex gap-2 items-center justify-center leading-none select-none cursor-pointer",
    appearances: {
        light: "text-gray-700 hover:bg-[--tabs-light-bg] data-[state=active]:text-gray-900",
        dark: "text-gray-300 hover:bg-[--tabs-bottom-indicator-trigger-dark-bg] data-[state=active]:text-white",
        both: "text-gray-700 hover:bg-[--tabs-light-bg] dark:text-gray-300 dark:hover:bg-[--tabs-bottom-indicator-trigger-dark-bg] data-[state=active]:text-gray-900 dark:data-[state=active]:text-white",
    },
};

const baseIndicator = {
    base: "block ease-in-out inset-x-0 transition-all duration-300 absolute h-0.5 -bottom-[1.25px] rounded-[--tabs-border-radius]",
    appearances: {
        light: "bg-[--tabs-bottom-indicator-light-bg]",
        dark: "bg-[--tabs-bottom-indicator-dark-bg]",
        both: "bg-[--tabs-bottom-indicator-light-bg] dark:bg-[--tabs-bottom-indicator-dark-bg]",
    },
};

const list = baseList.base + " " + baseList.appearances[config.appearance];
const trigger = baseTrigger.base + " " + baseTrigger.appearances[config.appearance];
const indicator = baseIndicator.base + " " + baseIndicator.appearances[config.appearance];

export { list, trigger, triggerIcon, indicator };
