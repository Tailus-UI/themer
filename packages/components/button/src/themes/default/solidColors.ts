import config from "../../button.config";
import { Colors, ColorsBase } from "../button.types";

const colors: ColorsBase = {
    neutral: {
        light: "text-white border-gray-800 bg-gray-900 before:border-gray-600 before:from-gray-800 hover:bg-gray-800 active:bg-gray-950",
        dark: "dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-400 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200",
        both: "text-white border-gray-800 bg-gray-900 before:border-gray-600 before:from-gray-800 hover:bg-gray-800 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-400 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200",
    },
    primary: {
        light: "border-primary-600 bg-primary-500 before:border-primary-500 before:from-primary-600 hover:bg-primary-600 active:bg-primary-700",
        dark: "dark:bg-primary-600 dark:before:border-primary-400 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700",
        both: "border-primary-600 bg-primary-500 before:border-primary-500 before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 dark:bg-primary-600 dark:before:border-primary-400 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700",
    },
    secondary: {
        light: "border-secondary-600 bg-secondary-500 before:border-secondary-500 before:from-secondary-600 hover:bg-secondary-600 active:bg-secondary-700",
        dark: "dark:bg-secondary-600 dark:before:border-secondary-400 dark:hover:bg-secondary-700 dark:active:bg-secondary-800 dark:active:before:from-secondary-700",
        both: "border-secondary-600 bg-secondary-500 before:border-secondary-500 before:from-secondary-600 hover:bg-secondary-600 active:bg-secondary-700 dark:bg-secondary-600 dark:before:border-secondary-400 dark:hover:bg-secondary-700 dark:active:bg-secondary-800 dark:active:before:from-secondary-700",
    },
    accent: {
        light: "border-accent-600 bg-accent-500 before:border-accent-500 before:from-accent-600 hover:bg-accent-600 active:bg-accent-700",
        dark: "dark:bg-accent-600 dark:before:border-accent-400 dark:hover:bg-accent-700 dark:active:bg-accent-800 dark:active:before:from-accent-700",
        both: "border-accent-600 bg-accent-500 before:border-accent-500 before:from-accent-600 hover:bg-accent-600 active:bg-accent-700 dark:bg-accent-600 dark:before:border-accent-400 dark:hover:bg-accent-700 dark:active:bg-accent-800 dark:active:before:from-accent-700",
    },
    danger: {
        light: "border-danger-600 bg-danger-500 before:border-danger-500 before:from-danger-600 hover:bg-danger-600 active:bg-danger-700",
        dark: "dark:bg-danger-600 dark:before:border-danger-400 dark:hover:bg-danger-700 dark:active:bg-danger-800 dark:active:before:from-danger-700",
        both: "border-danger-600 bg-danger-500 before:border-danger-500 before:from-danger-600 hover:bg-danger-600 active:bg-danger-700 dark:bg-danger-600 dark:before:border-danger-400 dark:hover:bg-danger-700 dark:active:bg-danger-800 dark:active:before:from-danger-700",
    },
    success: {
        light: "border-success-600 bg-success-500 before:border-success-500 before:from-success-600 hover:bg-success-600 active:bg-success-700",
        dark: "dark:bg-success-600 dark:before:border-success-400 dark:hover:bg-success-700 dark:active:bg-success-800 dark:active:before:from-success-700",
        both: "border-success-600 bg-success-500 before:border-success-500 before:from-success-600 hover:bg-success-600 active:bg-success-700 dark:bg-success-600 dark:before:border-success-400 dark:hover:bg-success-700 dark:active:bg-success-800 dark:active:before:from-success-700",
    },
    info: {
        light: "border-info-600 bg-info-500 before:border-info-500 before:from-info-600 hover:bg-info-600 active:bg-info-700",
        dark: "dark:bg-info-600 dark:before:border-info-400 dark:hover:bg-info-700 dark:active:bg-info-800 dark:active:before:from-info-700",
        both: "border-info-600 bg-info-500 before:border-info-500 before:from-info-600 hover:bg-info-600 active:bg-info-700 dark:bg-info-600 dark:before:border-info-400 dark:hover:bg-info-700 dark:active:bg-info-800 dark:active:before:from-info-700",
    },
    warning: {
        light: "border-warning-600 bg-warning-500 before:border-warning-500 before:from-warning-600 hover:bg-warning-600 active:bg-warning-700",
        dark: "dark:bg-warning-600 dark:before:border-warning-400 dark:hover:bg-warning-700 dark:active:bg-warning-800 dark:active:before:from-warning-700",
        both: "border-warning-600 bg-warning-500 before:border-warning-500 before:from-warning-600 hover:bg-warning-600 active:bg-warning-700 dark:bg-warning-600 dark:before:border-warning-400 dark:hover:bg-warning-700 dark:active:bg-warning-800 dark:active:before:from-warning-700",
    },
    gray: {
        light: "border-gray-600 bg-gray-500 before:border-gray-500 before:from-gray-600 hover:bg-gray-600 active:bg-gray-700",
        dark: "dark:bg-gray-600 dark:before:border-gray-400 dark:hover:bg-gray-700 dark:active:bg-gray-800 dark:active:before:from-gray-700",
        both: "border-gray-600 bg-gray-500 before:border-gray-500 before:from-gray-600 hover:bg-gray-600 active:bg-gray-700 dark:bg-gray-600 dark:before:border-gray-400 dark:hover:bg-gray-700 dark:active:bg-gray-800 dark:active:before:from-gray-700",
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
    neutral: colors.neutral[config.appearance],
};

export default solidColors;
export { solidColors };
