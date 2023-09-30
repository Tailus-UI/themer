import config from "../../badge.config";
import { Colors } from "../badge.types";

const colors = {
    primary: {
        light: "bg-primary-600 text-white",
        dark: "bg-primary-400 text-gray-950",
        both: "bg-primary-600 text-white dark:bg-primary-400 dark:text-gray-950",
    },
    secondary: {
        light: "bg-secondary-600 text-white",
        dark: "bg-secondary-400 text-gray-950",
        both: "bg-secondary-600 text-white dark:bg-secondary-400 dark:text-gray-950",
    },
    accent: {
        light: "bg-accent-600 text-white",
        dark: "bg-accent-400 text-gray-950",
        both: "bg-accent-600 text-white dark:bg-accent-400 dark:text-gray-950",
    },
    danger: {
        light: "bg-danger-600 text-white",
        dark: "bg-danger-400 text-gray-950",
        both: "bg-danger-600 text-white dark:bg-danger-400 dark:text-gray-950",
    },
    success: {
        light: "bg-success-600 text-white",
        dark: "bg-success-400 text-gray-950",
        both: "bg-success-600 text-white dark:bg-success-400 dark:text-gray-950",
    },
    warning: {
        light: "bg-warning-600 text-white",
        dark: "bg-warning-400 text-gray-950",
        both: "bg-warning-600 text-white dark:bg-warning-400 dark:text-gray-950",
    },
    info: {
        light: "bg-info-600 text-white",
        dark: "bg-info-400 text-gray-950",
        both: "bg-info-600 text-white dark:bg-info-400 dark:text-gray-950",
    },
    gray: {
        light: "bg-gray-600 text-white",
        dark: "bg-gray-400 text-gray-950",
        both: "bg-gray-600 text-white dark:bg-gray-400 dark:text-gray-950",
    },
};

const solidColors: Colors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    success: colors.success[config.appearance],
    warning: colors.warning[config.appearance],
    info: colors.info[config.appearance],
    gray: colors.gray[config.appearance],
};

export default solidColors;
export { solidColors };
