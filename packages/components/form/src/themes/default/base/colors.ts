import config from "./../../../form.config";
import { baseMessage } from "./base";
import { type MessageSizes } from "./sizes";

export type Color =
    | "primary"
    | "secondary"
    | "accent"
    | "gray"
    | "danger"
    | "warning"
    | "success"
    | "info";
export type Colors = {
    [key in Color]: string;
};
export type MessageColorsSizes = {
    [key in Color]: MessageSizes;
};

const baseMessageColors = {
    primary: {
        light: "text-primary-500",
        dark: "text-primary-400",
        both: "text-primary-500 dark:text-primary-400",
    },
    secondary: {
        light: "text-secondary-500",
        dark: "text-secondary-400",
        both: "text-secondary-500 dark:text-secondary-400",
    },
    accent: {
        light: "text-accent-500",
        dark: "text-accent-400",
        both: "text-accent-500 dark:text-accent-400",
    },
    gray: {
        light: "text-gray-500",
        dark: "text-gray-400",
        both: "text-gray-500 dark:text-gray-400",
    },
    danger: {
        light: "text-danger-500",
        dark: "text-danger-400",
        both: "text-danger-500 dark:text-danger-400",
    },
    warning: {
        light: "text-warning-700",
        dark: "text-warning-400",
        both: "text-warning-700 dark:text-warning-400",
    },
    success: {
        light: "text-success-500",
        dark: "text-success-400",
        both: "text-success-500 dark:text-success-400",
    },
    info: {
        light: "text-info-500",
        dark: "text-info-400",
        both: "text-info-500 dark:text-info-400",
    },
};

const messageColors: Colors = {
    primary: baseMessage + " " + baseMessageColors.primary[config.appearance],
    secondary: baseMessage + " " + baseMessageColors.secondary[config.appearance],
    accent: baseMessage + " " + baseMessageColors.accent[config.appearance],
    gray: baseMessage + " " + baseMessageColors.gray[config.appearance],
    danger: baseMessage + " " + baseMessageColors.danger[config.appearance],
    warning: baseMessage + " " + baseMessageColors.warning[config.appearance],
    success: baseMessage + " " + baseMessageColors.success[config.appearance],
    info: baseMessage + " " + baseMessageColors.info[config.appearance],
};

export { messageColors };
