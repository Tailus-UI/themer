import config from "./../../tabs.config";

const baseList = {
    base: "relative w-full shrink-0 h-10 flex items-center p-1 rounded-[--tabs-border-radius]",
    appearances: {
        light: "bg-[--tabs-light-bg]",
        dark: "bg-[--tabs-dark-bg]",
        both: "bg-[--tabs-light-bg] dark:bg-[--tabs-dark-bg]",
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

const list = baseList.base + " " + baseList.appearances[config.appearance];
const trigger = baseTrigger.base + " " + baseTrigger.appearances[config.appearance];
const indicator = baseIndicator.base + " " + baseIndicator.appearances[config.appearance];
const content = baseContent.base + " " + baseContent.appearances[config.appearance];

const elevatedIndicator =
    baseIndicator.base +
    " shadow shadow-gray-950/10 " +
    baseIndicator.appearances[config.appearance];

const softTabs = {
    list,
    trigger,
    triggerIcon,
    indicator: elevatedIndicator,
    content,
};

export { list, trigger, indicator, triggerIcon, content, softTabs, elevatedIndicator };
