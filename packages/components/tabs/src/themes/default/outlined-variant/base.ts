import { list, trigger, indicator, content } from "./../base";
import config from "./../../../tabs.config";

const outlinedList = {
    base: list + " border",
    appearances: {
        light: "border-[--tabs-light-border-color]",
        dark: "border-[--tabs-dark-border-color]",
        both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
    },
};

const outlinedIndicator = {
    base: indicator + " border",
    appearances: {
        light: "border-[--tabs-light-border-color]",
        dark: "border-[--tabs-dark-border-color]",
        both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
    },
};

const tabs = {
    list: outlinedList.base + " " + outlinedList.appearances[config.appearance],
    trigger: trigger + " " + outlinedList.appearances[config.appearance],
    indicator: outlinedIndicator.base + " " + outlinedIndicator.appearances[config.appearance],
    content,
};

export { tabs };
