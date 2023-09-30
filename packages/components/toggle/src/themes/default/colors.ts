import config from "./../../toggle.config";
import type { Colors } from "./../types";

const colors = {
    primary: {
        light: "text-primary-600",
        dark: "text-primary-500",
        both: "text-primary-600 dark:text-primary-500",
    },
    secondary: {
        light: "text-secondary-600",
        dark: "text-secondary-500",
        both: "text-secondary-600 dark:text-secondary-500",
    },
    accent: {
        light: "text-accent-600",
        dark: "text-accent-500",
        both: "text-accent-600 dark:text-accent-500",
    },
    danger: {
        light: "text-danger-600",
        dark: "text-danger-500",
        both: "text-danger-600 dark:text-danger-500",
    },
    warning: {
        light: "text-warning-700",
        dark: "text-warning-500",
        both: "text-warning-700 dark:text-warning-500",
    },
    success: {
        light: "text-success-600",
        dark: "text-success-500",
        both: "text-success-600 dark:text-success-500",
    },
    info: {
        light: "text-info-600",
        dark: "text-info-500",
        both: "text-info-600 dark:text-info-500",
    },
    gray: {
        light: "text-gray-600",
        dark: "text-gray-400",
        both: "text-gray-600 dark:text-gray-400",
    },
    neutral: {
        light: "text-gray-900",
        dark: "text-white",
        both: "text-gray-900 dark:text-white",
    },
};

const iconAfterColors: Colors = {
    primary: colors.primary[config.appearance],
    secondary: colors.secondary[config.appearance],
    accent: colors.accent[config.appearance],
    danger: colors.danger[config.appearance],
    warning: colors.warning[config.appearance],
    success: colors.success[config.appearance],
    info: colors.info[config.appearance],
    gray: colors.gray[config.appearance],
    neutral: colors.neutral[config.appearance],
};

export default iconAfterColors;
export { iconAfterColors };
