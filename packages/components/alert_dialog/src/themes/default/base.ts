import config from "./../../alertdialog.config";
import imageContainerColors from "./colors";

const baseContent = {
    base: "rounded-[--alert-border-radius] border p-8 alert-shadow focus:outline-none data-[state=open]:animate-contentShow",
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
    base: "m-0 text-lg font-medium",
    appearances: {
        light: "text-gray-900",
        dark: "text-white",
        both: "text-gray-900 dark:text-white",
    },
};

const baseDescription = {
    base: "mb-8 mt-4 text-base leading-normal",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const actions = "flex justify-end gap-4";
const centredActions = "flex justify-center gap-4";

const imageContainer = "mx-auto mb-6 flex h-16 w-16 rounded-full";
const image = "m-auto h-8 w-8";

const content =
    baseContent.alignment +
    " max-w-lg " +
    baseContent.base +
    " " +
    baseContent.appearances[config.appearance];

const overlay = baseOverlay.base + " " + baseOverlay.appearances[config.appearance];
const title = baseTitle.base + " " + baseTitle.appearances[config.appearance];
const description = baseDescription.base + " " + baseDescription.appearances[config.appearance];

const getImageContainer = (color: string) => {
    return imageContainer + " " + imageContainerColors[color];
};

export {
    content,
    overlay,
    title,
    description,
    actions,
    centredActions,
    imageContainer,
    getImageContainer,
    image,
};
