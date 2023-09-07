import config from "./../../accordion.config";

const item = {
    base: "overflow-hidden rounded-[--accordion-border-radius] border transition duration-300 data-[state=open]:z-10",
    appearances: {
        light: "border-gray-200 hover:border-gray-300",
        dark: "border-gray-800 hover:border-gray-700",
        both: "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700",
    },
};

const trigger = {
    parent: {
        base: "group flex w-full items-center justify-between rounded-[--accordion-border-radius] px-6 py-4 text-lg",
        appearances: {
            light: "text-gray-900",
            dark: "text-white",
            both: "text-gray-900 dark:text-white",
        },
    },
    icon: {
        base: "h-[1.125rem] w-[1.125rem]",
        motion: "transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180",
    },
};

const content = {
    base: "overflow-hidden",
    motion: "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const outlinedVariant = {
    root: "space-y-4",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent: trigger.parent.base + " " + trigger.parent.appearances[config.appearance],
        icon: trigger.icon.base + " " + trigger.icon.motion,
    },
    content: content.base + " " + content.motion + " " + content.appearances[config.appearance],
};

export { item, trigger, content, outlinedVariant };
