import { list, trigger, elevatedIndicator, content } from "./../base";
import config from "./../../../tabs.config";

const outlinedList = {
    base: list + " border",
    appearances: {
        light: "border-[--tabs-light-border-color]",
        dark: "border-[--tabs-dark-border-color]",
        both: "border-[--tabs-light-border-color] dark:border-[--tabs-dark-border-color]",
    },
};

const tabs = {
    list: outlinedList.base + " " + outlinedList.appearances[config.appearance],
    trigger: trigger,
    indicator: elevatedIndicator,
    content,
};

export { tabs };
