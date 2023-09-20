import imageContainerColors from "./colors";
import config from "./../../emptystate.config";

const root = "text-center flex flex-col items-center justify-center";
const baseImageContainer = "mx-auto flex h-40 w-40 rounded-full";

const image = "m-auto h-20 w-20";
const content = "mb-8 mt-4";
const baseTitle = {
    base: "text-xl font-semibold",
    appearances: {
        light: "text-gray-900",
        dark: "text-white",
        both: "text-gray-900 dark:text-white",
    },
};
const baseDescription = {
    base: "mt-2 text-base leading-normal",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const imageContainer = {
    gray: baseImageContainer + " " + imageContainerColors.gray,
    primary: baseImageContainer + " " + imageContainerColors.primary,
    secondary: baseImageContainer + " " + imageContainerColors.secondary,
    accent: baseImageContainer + " " + imageContainerColors.accent,
    success: baseImageContainer + " " + imageContainerColors.success,
    info: baseImageContainer + " " + imageContainerColors.info,
    warning: baseImageContainer + " " + imageContainerColors.warning,
    danger: baseImageContainer + " " + imageContainerColors.danger,
};

const title = baseTitle.base + " " + baseTitle.appearances[config.appearance];
const description = baseDescription.base + " " + baseDescription.appearances[config.appearance];

export { root, imageContainer, image, content, title, description };
