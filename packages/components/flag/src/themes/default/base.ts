import config from "../../flag.config";
import { iconColors, titleColors } from "./colors";
import { ghostIconButton } from "@tailus/themer-button";
import { twMerge } from "tailwind-merge";

const root = {
    base: "relative w-full flex max-w-md gap-2 rounded-[--flag-border-radius] border feedback-shadow",
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

const closeProps = {
    button: ghostIconButton.gray.sm,
    icon: ghostIconButton.icon.lg,
};

const baseCloseButton = {
    base: twMerge(
        closeProps.button,
        "absolute before:rounded-[calc(var(--flag-border-radius)-0.5rem)]"
    ),
    appearances: {
        light: twMerge(closeProps.button, "hover:before:bg-gray-50 focus:before:bg-gray-100/75"),
        dark: twMerge(closeProps.button, "hover:before:bg-gray-500/5 focus:before:bg-gray-500/10"),
        both: twMerge(
            closeProps.button,
            "hover:before:bg-gray-50 focus:before:bg-gray-100/75 dark:hover:before:bg-gray-500/5 dark:focus:before:bg-gray-500/10"
        ),
    },
};

const closeButton = {
    button: baseCloseButton.base + " " + baseCloseButton.appearances[config.appearance],
    icon: closeProps.icon,
};

const baseIcon = {
    parent: "flex w-8",
    icon: "h-6 w-6",
};

const baseTitle = "mr-2 text-sm font-medium";

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
