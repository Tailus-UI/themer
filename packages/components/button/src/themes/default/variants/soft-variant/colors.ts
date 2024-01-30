import config from "../../../../button.config";
import { Colors, ColorsBase } from "../../../button.types";

const softColors: ColorsBase = {
    primary: {
        light: "text-primary-800 bg-primary-100 hover:bg-primary-200/75 active:bg-primary-100",
        dark: "dark:text-primary-300 dark:bg-primary-500/10 dark:hover:bg-primary-500/15 dark:active:bg-primary-500/10",
        both: "text-primary-800 bg-primary-100 hover:bg-primary-200/75 active:bg-primary-100 dark:text-primary-300 dark:bg-primary-500/10 dark:hover:bg-primary-500/15 dark:active:bg-primary-500/10",
    },
    secondary: {
        light: "text-secondary-800 bg-secondary-100 hover:bg-secondary-200/75 active:bg-secondary-100",
        dark: "dark:text-secondary-300 dark:bg-secondary-500/10 dark:hover:bg-secondary-500/15 dark:active:bg-secondary-500/10",
        both: "text-secondary-800 bg-secondary-100 hover:bg-secondary-200/75 active:bg-secondary-100 dark:text-secondary-300 dark:bg-secondary-500/10 dark:hover:bg-secondary-500/15 dark:active:bg-secondary-500/10",
    },
    accent: {
        light: "text-accent-800 bg-accent-100 hover:bg-accent-200/75 active:bg-accent-100",
        dark: "dark:text-accent-300 dark:bg-accent-500/10 dark:hover:bg-accent-500/15 dark:active:bg-accent-500/10",
        both: "text-accent-800 bg-accent-100 hover:bg-accent-200/75 active:bg-accent-100 dark:text-accent-300 dark:bg-accent-500/10 dark:hover:bg-accent-500/15 dark:active:bg-accent-500/10",
    },
    danger: {
        light: "text-danger-800 bg-danger-100 hover:bg-danger-200/75 active:bg-danger-100",
        dark: "dark:text-danger-300 dark:bg-danger-500/10 dark:hover:bg-danger-500/15 dark:active:bg-danger-500/10",
        both: "text-danger-800 bg-danger-100 hover:bg-danger-200/75 active:bg-danger-100 dark:text-danger-300 dark:bg-danger-500/10 dark:hover:bg-danger-500/15 dark:active:bg-danger-500/10",
    },
    success: {
        light: "text-success-800 bg-success-100 hover:bg-success-200/75 active:bg-success-100",
        dark: "dark:text-success-300 dark:bg-success-500/10 dark:hover:bg-success-500/15 dark:active:bg-success-500/10",
        both: "text-success-800 bg-success-100 hover:bg-success-200/75 active:bg-success-100 dark:text-success-300 dark:bg-success-500/10 dark:hover:bg-success-500/15 dark:active:bg-success-500/10",
    },
    info: {
        light: "text-info-800 bg-info-100 hover:bg-info-200/75 active:bg-info-100",
        dark: "dark:text-info-300 dark:bg-info-500/10 dark:hover:bg-info-500/15 dark:active:bg-info-500/10",
        both: "text-info-800 bg-info-100 hover:bg-info-200/75 active:bg-info-100 dark:text-info-300 dark:bg-info-500/10 dark:hover:bg-info-500/15 dark:active:bg-info-500/10",
    },
    warning: {
        light: "text-warning-800 bg-warning-100 hover:bg-warning-200/75 active:bg-warning-100",
        dark: "dark:text-warning-300 dark:bg-warning-500/10 dark:hover:bg-warning-500/15 dark:active:bg-warning-500/10",
        both: "text-warning-800 bg-warning-100 hover:bg-warning-200/75 active:bg-warning-100 dark:text-warning-300 dark:bg-warning-500/10 dark:hover:bg-warning-500/15 dark:active:bg-warning-500/10",
    },
    gray: {
        light: "text-gray-800 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100",
        dark: "dark:text-gray-300 dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10",
        both: "text-gray-800 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-gray-300 dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10",
    },
};

const colors: Colors = {
    primary: softColors.primary[config.appearance],
    secondary: softColors.secondary[config.appearance],
    accent: softColors.accent[config.appearance],
    danger: softColors.danger[config.appearance],
    success: softColors.success[config.appearance],
    warning: softColors.warning[config.appearance],
    info: softColors.info[config.appearance],
    gray: softColors.gray[config.appearance],
};

export default colors;
