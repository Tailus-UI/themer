import config from "../../flag.config";
import { iconColors, titleColors } from "./colors";
import { ghostIconButton } from "@tailus/themer-button";

const root = {
    base: "relative w-full flex max-w-md gap-1 rounded-[--flag-border-radius] border feedback-shadow",
    appearances: {
        light: "border-[--feedback-light-border-color] bg-white",
        dark: "border-[--feedback-dark-border-color] bg-[--feedback-dark-bg]",
        both: "border-[--feedback-light-border-color] bg-white dark:border-[--feedback-dark-border-color] dark:bg-[--feedback-dark-bg]",
    },
};

const baseLink = {
    base: "hover:underline",
    appearances: {
        light: "text-info-600",
        dark: "text-info-400",
        both: "text-info-600 dark:text-info-400",
    },
};

let closeButton = {
    button: ghostIconButton.gray.xs,
    icon: ghostIconButton.icon.lg,
};
closeButton.button = closeButton.button.replace(
    "before:rounded-[--btn-border-radius]",
    "before:rounded-[calc(var(--flag-border-radius)-0.5rem)]"
);
closeButton.button = closeButton.button.replace(
    "hover:before:bg-gray-200",
    "hover:before:bg-gray-50"
);
closeButton.button = closeButton.button.replace(
    "focus:before:bg-gray-300/75",
    "focus:before:bg-gray-100/75"
);
closeButton.button = closeButton.button.replace(
    "hover:before:bg-gray-500/20",
    "hover:before:bg-gray-500/5"
);
closeButton.button = closeButton.button.replace(
    "focus:before:bg-gray-500/30",
    "focus:before:bg-gray-500/10"
);
closeButton.button = closeButton.button.replace(
    "dark:hover:before:bg-gray-500/20",
    "dark:hover:before:bg-gray-500/5"
);
closeButton.button = closeButton.button.replace(
    "dark:focus:before:bg-gray-500/30",
    "dark:focus:before:bg-gray-500/10"
);

const baseIcon = {
    parent: "flex w-8",
    icon: "h-6 w-6",
};

const baseTitle = "text-sm font-medium";

const baseMessage = {
    base: "mt-2 text-sm leading-tight",
    appearances: {
        light: "text-gray-700",
        dark: "text-gray-300",
        both: "text-gray-700 dark:text-gray-300",
    },
};

const icon = {
    parent: baseIcon.parent,
    success: baseIcon.icon + " " + iconColors.success[config.appearance],
    info: baseIcon.icon + " " + iconColors.info[config.appearance],
    warning: baseIcon.icon + " " + iconColors.warning[config.appearance],
    danger: baseIcon.icon + " " + iconColors.danger[config.appearance],
    gray: baseIcon.icon + " " + iconColors.gray[config.appearance],
};

const title = {
    success: baseTitle + " " + titleColors.success[config.appearance],
    info: baseTitle + " " + titleColors.info[config.appearance],
    warning: baseTitle + " " + titleColors.warning[config.appearance],
    danger: baseTitle + " " + titleColors.danger[config.appearance],
    gray: baseTitle + " " + titleColors.gray[config.appearance],
};

const link = baseLink.base + " " + baseLink.appearances[config.appearance];

const message = baseMessage.base + " " + baseMessage.appearances[config.appearance];

const content = "w-[calc(100%-2.5rem)]";
const actions = "mt-4 flex items-center gap-4 text-sm";

export { root, link, icon, title, message, actions, content, closeButton };
