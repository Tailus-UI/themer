import config from "./../../select.config";

const viewport = "p-2";

const baseContent = {
    base: "overflow-hidden rounded-[--menu-border-radius] menu-shadow border",
    appearances: {
        light: "bg-white border-[--menu-light-border-color]",
        dark: "bg-[--select-dark-bg] border-[--menu-dark-border-color]",
        both: "bg-white border-[--menu-light-border-color] dark:bg-[--select-dark-bg] dark:border-[--menu-dark-border-color]",
    },
};

const baseScrollButton = {
    base: "flex items-center justify-center h-8 ",
    appearances: {
        light: "bg-white text-gray-700",
        dark: "bg-[--select-dark-bg] text-gray-300",
        both: "bg-white text-gray-700 dark:bg-[--select-dark-bg] dark:text-gray-300",
    },
};

const baseItem = {
    base: "text-sm leading-none rounded-[calc(var(--menu-border-radius)-0.5rem)] flex items-center h-8 pr-9 pl-6 relative select-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[highlighted]:outline-none data-[highlighted]:bg-primary-600 data-[highlighted]:text-white",
    appearances: {
        light: "text-gray-700 data-[disabled]:text-gray-300",
        dark: "text-gray-300 data-[disabled]:text-gray-700",
        both: "text-gray-700 dark:text-gray-300 dark:data-[disabled]:text-gray-700",
    },
};

const label = "px-6 text-sm leading-7 text-gray-500";

const baseSeparator = {
    base: "mx-6 my-2 h-px",
    appearance: {
        light: "bg-[--separator-light-color]",
        dark: "bg-[--separator-dark-color]",
        both: "bg-[--separator-light-color] dark:bg-[--separator-dark-color]",
    },
};
const triggerIcon = "-mr-1.5 h-[1.125rem] w-[1.125rem]";
const itemIndicator = "absolute left-0 inline-flex w-6 items-center justify-center";

const content = baseContent.base + " " + baseContent.appearances[config.appearance];
const scrollButton = baseScrollButton.base + " " + baseScrollButton.appearances[config.appearance];
const item = baseItem.base + " " + baseItem.appearances[config.appearance];
const separator = baseSeparator.base + " " + baseSeparator.appearance[config.appearance];

export { viewport, content, scrollButton, item, itemIndicator, separator, label, triggerIcon };
