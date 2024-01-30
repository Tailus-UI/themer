import config from "../../../../button.config";
import { Colors, ColorsBase } from "../../../button.types";

const colors: ColorsBase = {
    primary: {
        light: "text-primary-800 hover:bg-primary-100 active:bg-primary-200/75",
        dark: "dark:text-primary-300 dark:hover:bg-primary-500/10 dark:active:bg-primary-500/15",
        both: "text-primary-800 hover:bg-primary-100 active:bg-primary-200/75 dark:text-primary-300 dark:hover:bg-primary-500/10 dark:active:bg-primary-500/15",
    },
    secondary: {
        light: "text-secondary-800 hover:bg-secondary-100 active:bg-secondary-200/75",
        dark: "dark:text-secondary-300 dark:hover:bg-secondary-500/10 dark:active:bg-secondary-500/15",
        both: "text-secondary-800 hover:bg-secondary-100 active:bg-secondary-200/75 dark:text-secondary-300 dark:hover:bg-secondary-500/10 dark:active:bg-secondary-500/15",
    },
    accent: {
        light: "text-accent-800 hover:bg-accent-100 active:bg-accent-200/75",
        dark: "dark:text-accent-300 dark:hover:bg-accent-500/10 dark:active:bg-accent-500/15",
        both: "text-accent-800 hover:bg-accent-100 active:bg-accent-200/75 dark:text-accent-300 dark:hover:bg-accent-500/10 dark:active:bg-accent-500/15",
    },
    danger: {
        light: "text-danger-800 hover:bg-danger-100 active:bg-danger-200/75",
        dark: "dark:text-danger-300 dark:hover:bg-danger-500/10 dark:active:bg-danger-500/15",
        both: "text-danger-800 hover:bg-danger-100 active:bg-danger-200/75 dark:text-danger-300 dark:hover:bg-danger-500/10 dark:active:bg-danger-500/15",
    },
    success: {
        light: "text-success-800 hover:bg-success-100 active:bg-success-200/75",
        dark: "dark:text-success-300 dark:hover:bg-success-500/10 dark:active:bg-success-500/15",
        both: "text-success-800 hover:bg-success-100 active:bg-success-200/75 dark:text-success-300 dark:hover:bg-success-500/10 dark:active:bg-success-500/15",
    },
    info: {
        light: "text-info-800 hover:bg-info-100 active:bg-info-200/75",
        dark: "dark:text-info-300 dark:hover:bg-info-500/10 dark:active:bg-info-500/15",
        both: "text-info-800 hover:bg-info-100 active:bg-info-200/75 dark:text-info-300 dark:hover:bg-info-500/10 dark:active:bg-info-500/15",
    },
    warning: {
        light: "text-warning-800 hover:bg-warning-100 active:bg-warning-200/75",
        dark: "dark:text-warning-300 dark:hover:bg-warning-500/10 dark:active:bg-warning-500/15",
        both: "text-warning-800 hover:bg-warning-100 active:bg-warning-200/75 dark:text-warning-300 dark:hover:bg-warning-500/10 dark:active:bg-warning-500/15",
    },
    gray: {
        light: "text-gray-800 hover:bg-gray-100 active:bg-gray-200/75",
        dark: "dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15",
        both: "text-gray-800 hover:bg-gray-100 active:bg-gray-200/75 dark:text-gray-300 dark:hover:bg-gray-500/10 dark:active:bg-gray-500/15",
    },
    neutral: {
        light: "text-gray-950 hover:bg-gray-950 hover:text-white active:bg-gray-900",
        dark: "text-white hover:bg-white hover:text-gray-950 active:bg-white/90",
        both: "text-gray-950 hover:bg-gray-950 hover:text-white active:bg-gray-900 text-white hover:bg-white hover:text-gray-950 active:bg-white/90",
    },
};

const ghostColors: Colors = {
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

export default ghostColors;
