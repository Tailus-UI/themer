import config from "./../../dialog.config";

const baseContent = {
    base: "max-w-sm rounded-[--alert-border-radius] border p-8 alert-shadow focus:outline-none data-[state=open]:animate-contentShow",
    alignment:
        "fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%]",
    appearances: {
        light: "border-[--feedback-light-border-color] bg-white",
        dark: "border-[--feedback-dark-border-color] bg-[--feedback-dark-bg]",
        both: "border-[--feedback-light-border-color] bg-white dark:border-[--feedback-dark-border-color] dark:bg-[--feedback-dark-bg]",
    },
};

const baseOverlay = {
    base: "fixed inset-0 backdrop-blur-[--overlay-backdrop-blur] data-[state=open]:animate-overlayShow",
    appearances: {
        light: "light-overlay-bg",
        dark: "dark-overlay-bg",
        both: "light-overlay-bg dark:dark-overlay-bg",
    },
};

const baseTitle = {
    base: "m-0 text-xl font-medium w-[calc(100%-2rem)]",
    appearances: {
        light: "text-gray-900",
        dark: "text-white",
        both: "text-gray-900 dark:text-white",
    },
};

const baseDescription = {
    base: "mb-6 mt-4 text-base leading-normal",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const actions = "mt-6 flex justify-end gap-4";

const content =
    baseContent.alignment +
    " " +
    baseContent.base +
    " " +
    baseContent.appearances[config.appearance];

const overlay = baseOverlay.base + " " + baseOverlay.appearances[config.appearance];
const title = baseTitle.base + " " + baseTitle.appearances[config.appearance];
const description = baseDescription.base + " " + baseDescription.appearances[config.appearance];

export { content, overlay, title, description, actions };
